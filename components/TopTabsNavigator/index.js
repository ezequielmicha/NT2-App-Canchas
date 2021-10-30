import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from '../../screens/Home';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

export default function MaterialTopTabNavigator() {


    const TopTabs = createMaterialTopTabNavigator()
  
    return (
        <TopTabs.Navigator>
            <TopTabs.Screen name={'Inicio'} component={Home}/>          
        </TopTabs.Navigator>
    );
  }