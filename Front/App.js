import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottonTabNav from './navigations/BottonTabNav';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottonTabNav}
          options={{ headerShown: false }}         
        />         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
