//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MaterialTopTabNavigator from './components/topTabsNavigator';
import GlobalContext, { authData, isAuthenticated, dataReserve, newUser } from "./components/globals/context";
import LoginNavigator from './components/stackNavigator';


export default function App() {
  const [AuthData, setAuthData] = useState({...authData});
  const [NewUser, setNewUser] = useState({...newUser});
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [DataReserve, setDataReserve] = useState({...dataReserve});
  console.log("DATA RESERVE", DataReserve);
  console.log("NEW USER", NewUser);

  return (
 
        
    <GlobalContext.Provider value={{ AuthData, setAuthData, setIsAuthenticated, DataReserve, setDataReserve, NewUser, setNewUser }} >

        <NavigationContainer>
        {
          (IsAuthenticated) ?
           <MaterialTopTabNavigator />
           :
           <LoginNavigator/>
        }
        </NavigationContainer>

      
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 150
  },
  
});

