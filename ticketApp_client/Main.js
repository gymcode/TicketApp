import React, { useState, createContext, useEffect, useMemo, useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import { theme } from './utils/theme'

//data
import { MatchCenterArray, UpcomingMatches } from './data/data';
import { TableArray } from './data/tableData';

import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import Loading from './screens/welcome/loading';

export const newsContext = createContext({});
const Stack = createStackNavigator();

// Root Stack Navigator
export default function Main() {

  const [matches, setMatches] = useState(MatchCenterArray);
  const [tickets, setTicket] = useState([]);
  const [table, setTable] = useState(TableArray);

  // Add ticket to history after purchase
  function addTicket(ticketDetails){
    const newTicket = {...ticketDetails}
    const updatedTicket = [newTicket, ...tickets] 
    setTicket(updatedTicket)
}

// remove ticket from history
function deleteTicket(ticketDetails){
  let newTicket = tickets.filter((removeItem) => {
    return removeItem.id !== ticketDetails.id
  })
  setTicket(newTicket)
}

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    isSignOut:false
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          isSignOut:false,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          isSignOut:false,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userToken: null,
          isSignOut:true,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          isSignOut: false,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async(data) => {
      const { email } = data
      let userToken = email
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', token: userToken });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: async (data) => {
       const { email } = data
       let userToken = email
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'REGISTER', token: userToken });
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
     <Loading />
    );
  }
  return (
    <newsContext.Provider value={{ matches, table, tickets, addTicket, deleteTicket, authContext }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{
          gestureEnabled:true,
          gestureDirection:'horizontal',
          animation:'fade',
          headerMode:'float'
        }} >
          {loginState.userToken === null  ? (
               <Stack.Screen
               name="AuthStack"
               component={AuthStack}
               options={{
                 headerShown: false,
              }}   
            />
           ) :  (   
              <Stack.Screen  
               name="MainApp"
               component={AppStack} 
               options={{ 
                 headerShown: false,
                }} 
              /> 
          ) 
            }
        </Stack.Navigator>
      </NavigationContainer>
    </newsContext.Provider>
   
  );
}
