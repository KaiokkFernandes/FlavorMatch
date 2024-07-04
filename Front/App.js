import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottonTabNav from './navigations/BottonTabNav';
import ChatScreen from './screens/ChatScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">      
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
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
