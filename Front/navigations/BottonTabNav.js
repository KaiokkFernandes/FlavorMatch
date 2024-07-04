import React, { Profiler } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from '../screens/Create';
import Message from '../screens/Message';
import Profile from '../screens/Profile'; 
import Settings from '../screens/Settings'; 
import { Ionicons as Icon } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

function BottonTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'HomeScreen': iconName = 'home-outline'; break;
            case 'Create': iconName = 'create-outline'; break;
            case 'Message': iconName = 'chatbubbles-outline'; break;
            case 'Profile': iconName = 'person-outline'; break;
            case 'Settings': iconName = 'settings-outline'; break;
            default: iconName = null;
          }
          return iconName ? <Icon name={iconName} size={size} color={color} /> : null;
        },
        tabBarStyle: { position: 'absolute', backgroundColor: 'white', borderTopColor: 'transparent', height: 60 }
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default BottonTabNav;