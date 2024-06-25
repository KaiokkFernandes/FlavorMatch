import { Platform, Text, View } from "react-native";
import React, { Component } from "react";
import {
  SimpleLineIcons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../constantes/colors";
import { Create, Home, Message, Profile, Settings } from "../screens";

const Tab = createBottomTabNavigator();

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
    ...styles.shadow,
  },
};

const BottonTabNav = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Create"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Create"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Create"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  position: "absolute",
                  top: -30,
                  justifyContent: "center",
                  alignItems: "center",
                  width: Platform.OS === "ios" ? 70 : 60,
                  height: Platform.OS === "ios" ? 70 : 60,
                  top: Platform.OS === "ios" ? -30 : -10,
                  borderRadius: Platform.OS === "ios" ? 35 : 30,
                  backgroundColor: COLORS.primary,
                  borderColor: COLORS.white,
                  ...styles.shadow,
                }}
              >
                <Fontisto name="plus-a" size={24} color={COLORS.white} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Settins"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="Settings"
                size={24}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        compon
        ent={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="Profile"
                size={24}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonTabNav;
