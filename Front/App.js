import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import LoginScreen from './screens/Login';
import BottonTabNav from './navigations/BottonTabNav';
import CreateScreen from './screens/Create';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottonTabNav}
        options={{ headerShown: false }}         
      />   
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
