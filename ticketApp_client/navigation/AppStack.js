import React from 'react';
import {  Dimensions, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTab';
import CustomizeFeed from '../screens/customizeFeed/customizeFeedScreen';
import NewsDetails from '../screens/home/NewsDetails/newsDetails';
import Contact from '../screens/more/contactUs/contactUs';
import FAQ from '../screens/more/FAQ/faq';
import LegalTerms from '../screens/more/terms/legalTerms';

const winHeight = Dimensions.get('window').height;

const App = createStackNavigator();

const AppStack = () => {
    return(
        <App.Navigator initialRouteName="Feed">
            <App.Screen 
                name="CustomizeFeed"
                component={CustomizeFeed}
                options={{
                  headerShown: false,
                  animationEnabled:false
                }}
            />
            <App.Screen
               name="BottomTab"
               component={BottomTabNavigator}
               options={{
                 headerBackTitleVisible: false,
                 headerStyle: {
                   height: winHeight /10,
                     backgroundColor: "#e9446a" ,
                     shadowColor: 'black',
                     shadowOffset: { width: 0, height: 2 },
                     shadowRadius: 6,
                     shadowOpacity: 0.2,
                     elevation: 3,    
                 },
                 headerLeft:() => <View />,
               
                 headerTitleStyle: {
                   fontSize: 20,
                   fontWeight: '700',
                   color:"#fff"
                 },
                 animationEnabled:false,
               }}
            />
            <App.Screen 
                name="News"
                component={NewsDetails}
                options={{
                headerStyle: {
                    height: winHeight /10,
                    backgroundColor: '#e9446a',
                },
                headerBackTitleVisible: false,
                
                headerTitle: () => (
                    <Text
                    style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                    News
                    </Text>
                ),
                }}
            />
            <App.Screen 
                name="Contact Us"
                component={Contact}
                options={{
                headerStyle: {
                    height: winHeight * 0.1,
                    backgroundColor: '#e9446a',
                },
                headerBackTitleVisible: false,
                headerTitle: () => (
                    <Text
                    style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                    Contact Us
                    </Text>
                ),
                }}
            />
            <App.Screen 
                name="FAQ"
                component={FAQ}
                options={{
                headerStyle: {
                    height: winHeight * 0.1,
                    backgroundColor: '#e9446a',
                },
                headerBackTitleVisible: false,
                headerTitle: () => (
                    <Text
                    style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                    FAQs
                    </Text>
                ),
                }}
            />
            <App.Screen
                name="Terms"
                component={LegalTerms}
                options={{
                headerStyle: {
                    height: winHeight * 0.1,
                    backgroundColor: '#e9446a',
                },
                headerBackTitleVisible: false,
                headerTitle: () => (
                    <Text
                    style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                    Privacy Policy
                    </Text>
                ),
             }}
            />
        </App.Navigator>
    )
}

export default AppStack;