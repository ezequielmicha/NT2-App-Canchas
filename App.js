//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MaterialTopTabNavigator from './components/topTabsNavigator';
import GlobalContext, { authData, dataReserve, reserveToCalificate } from "./components/globals/context";
import LoginNavigator from './components/stackNavigator';


export default function App() {
  const [AuthData, setAuthData] = useState({...authData});
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [DataReserve, setDataReserve] = useState({...dataReserve});
  const [ReserveToCalificate, setReserveToCalificate] = useState({...reserveToCalificate});

  return (
 
        
    <GlobalContext.Provider value={{ AuthData, setAuthData, setIsAuthenticated, DataReserve, setDataReserve, ReserveToCalificate, setReserveToCalificate }} >

        <NavigationContainer>
        {
          //(IsAuthenticated) ?
          <MaterialTopTabNavigator />
          //:
          //<LoginNavigator/>
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

