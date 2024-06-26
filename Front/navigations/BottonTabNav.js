import { Platform, Text, View } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../constantes/colors";
import Create from "../screens/Create";   
import Home from "../screens/Home";   
import Message from "../screens/Message"; 
import Profile from "../screens/Profile"; 
import Settings from "../screens/Settings"; 
const Tab = createBottomTabNavigator();
import { Ionicons as Icon } from '@expo/vector-icons';

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: 90,
  },
};

function BottonTabNav() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Create':
            iconName = 'create-outline';
                break;
              case 'Message':
                iconName = 'chatbubbles-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }
  
  export default BottonTabNav;
  