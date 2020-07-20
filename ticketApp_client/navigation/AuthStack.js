import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from '../screens/welcome/loading';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import LoginScreen from '../screens/login/login';
import ResetPassword from '../screens/resetPassword/ResetPasswordScreen';
import SignUp from '../screens/signUp/signUp';
import customizeFeed from '../screens/customizeFeed/customizeFeedScreen';

const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator initialRouteName="AuthStack">
            <Auth.Screen 
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Auth.Screen 
               name="Login"
               component={LoginScreen}
               options={{
                 headerShown: false,
               }}
            />
            <Auth.Screen 
                name="Reset"
                component={ResetPassword}
                options={{
                  headerShown:false,
                }}
            />
            <Auth.Screen 
                name="SignUp"
                component={SignUp}
                options={{ 
                  headerShown: false,
                }}
            />
            {/* <Auth.Screen
                 name="CustomizeFeed"
                 component={customizeFeed}
                 options={{
                   headerShown: false,
                   animationEnabled:false
                 }}
            /> */}
        </Auth.Navigator>    
     );
}
 
export default AuthStack;