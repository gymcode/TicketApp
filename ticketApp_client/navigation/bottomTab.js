import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/tabBarIcon/tabBarIcon';
import TabBarIcon2 from '../components/tabBarIcon/tabBarIcons2';
import TabBarIcon3 from '../components/tabBarIcon/tabBarIcons3';
import TabBarIcon4 from '../components/tabBarIcon/tabBarIcons4';
import createTopTab from './TopTabNavigator';
import Matches from '../screens/upcomingMatches/upcomingMatches';
import TeamInfo from '../screens/teamInfo/teamInfo';
import More from '../screens/more/more';
import TicketHistory from '../screens/ticket-history/TicketHistory';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Feed';


export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#e9446a',
        style: {
          backgroundColor: 'white',
          shadowColor: '#440',
          shadowOpacity: 0.4,
          shadowOffset: { width: 0, height: 3 },
        },  
        labelStyle:{fontWeight:'bold'}
      }}
      
      initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Feed"
        component={createTopTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon3 focused={focused} name="feed" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon3 focused={focused} name="calendar" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Team"
        component={TeamInfo}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon3 focused={focused} name="users" />
          ),
        }}
      />
      <BottomTab.Screen 
        name="History"
        component={TicketHistory}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon2 focused={focused} name="ticket" />
          ),
        }}

      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-more" />
          ),
        }}
      />
    </BottomTab.Navigator>
   
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Feed':
      return 'Feed';
    case 'Matches':
      return 'Matches';
    case 'Team':
      return 'Team Info';
    case 'History':
      return 'Ticket History'
    case 'More':
      return 'More';
  }
}
