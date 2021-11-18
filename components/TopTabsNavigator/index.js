import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../../screens/Home';
import Maps from '../../screens/Maps';
import Califications from '../../screens/Califications';
import Contact from '../../screens/Contact';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Reserve from '../../screens/Reserve';
import Constants from 'expo-constants';



export default function MaterialTopTabNavigator() {


    const TopTabs = createMaterialTopTabNavigator()
  
    return (
        <TopTabs.Navigator style={styles.container}>
            <TopTabs.Screen name={'Inicio'} component={Home}/>
            <TopTabs.Screen name={'Reservas'} component={Reserve}/>
            <TopTabs.Screen name={'Ubicacion'} component={Maps}/>
            <TopTabs.Screen name={'Calificaciones'} component={Califications} options={{ title: 'Calificaciones', headerShown: false }}/>
            <TopTabs.Screen name={'Cuenta'} component={Contact}/>
        </TopTabs.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight
    },
  });