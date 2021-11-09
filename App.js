//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MaterialTopTabNavigator from './components/topTabsNavigator';
import GlobalContext, { authData } from "./components/globals/context";
import LoginNavigator from './components/stackNavigator';
import { createStackNavigator, createLoginNavigator  } from "@react-navigation/stack";

export default function App() {
  //const Stack = LoginNavigator();
  // const StackLogin = createLoginNavigator();
  const [AuthData, setAuthData] = useState({...authData});
  // const [authenticated, setAuthenticated] = useState(true)
  const isAuthenticated = () => AuthData.email === undefined;

  return (
 // <GlobalContext.Provider value={{ AuthData, setAuthData }} >
    <NavigationContainer>
    {
          (isAuthenticated()) ?
            <MaterialTopTabNavigator/>
            :
            <LoginNavigator/>
            
      }
    
      
    </NavigationContainer>
 // </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});