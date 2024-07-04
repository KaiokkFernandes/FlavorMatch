import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import BottonTabNav from './navigations/BottonTabNav';
import ChatScreen from './screens/ChatScreen';
import FormDate from './screens/formDate';
import AppointmentConfirmationScreen from './screens/ConfirmDateScreen';
import RestaurantDetailsScreen from './screens/DetailsDate';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">      
      <Stack.Screen
        name="Main"
        component={BottonTabNav}
        options={{ headerShown: false }}         
      />   
        <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}         
      /> 

      <Stack.Screen
       name="Form"
       component ={FormDate}
       options={{ headerShown: false }}      
      />
 
      <Stack.Screen
       name="AppointmentConfirmationScreen"
       component ={AppointmentConfirmationScreen}
       options={{ headerShown: false }}      
      />
      <Stack.Screen 
      name="RestaurantDetailsScreen"
      component={RestaurantDetailsScreen}
      options={{ headerShown: false }}  
      />
      
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
