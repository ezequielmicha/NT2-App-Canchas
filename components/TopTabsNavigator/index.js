import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from '../../screens/Home';
import Maps from '../../screens/Maps';
import Califications from '../../screens/Califications';
import Contact from '../../screens/Contact';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Reserve from '../../screens/Reserve';



export default function MaterialTopTabNavigator() {


    const TopTabs = createMaterialTopTabNavigator()
  
    return (
        <TopTabs.Navigator>
            <TopTabs.Screen name={'Inicio'} component={Home}/>
            <TopTabs.Screen name={'Reservas'} component={Reserve}/>
            <TopTabs.Screen name={'Ubicacion'} component={Maps}/>
            <TopTabs.Screen name={'Calificaciones'} component={Califications} options={{ title: 'Calificaciones', headerShown: false }}/>
            <TopTabs.Screen name={'Cuenta'} component={Contact}/>
        </TopTabs.Navigator>
    );
  }