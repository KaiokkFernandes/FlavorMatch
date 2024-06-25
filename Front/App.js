import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; 
import { NativeRouter, Route } from 'react-router-native';

export default function App() {

  return (
    <NativeRouter>
      <View onLayout={onLayoutRootView}>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/settings" component={Settings} />
        <Route path="/message" component={Message} />
        <Route path="/editprofile" component={EditProfile} />
      </View>
    </NativeRouter>
  );
}

// Defina os componentes que serão usados nas rotas:
const Home = () => <Text>Home Screen</Text>;
const Create = () => <Text>Create Screen</Text>;
const Settings = () => <Text>Settings Screen</Text>;
const Message = () => <Text>Message Screen</Text>;
const EditProfile = () => <Text>Edit Profile Screen</Text>;
