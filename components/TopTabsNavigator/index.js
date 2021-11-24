import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../../screens/Home';
import Maps from '../../screens/Maps';
import Califications from '../../screens/Califications';
import Contact from '../../screens/Contact';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Reserve from '../../screens/Reserve';

//import { Dimensions, StyleSheet, Text, View,ImageBackground } from 'react-native';


import { Ionicons } from "@expo/vector-icons";
import Constants from 'expo-constants';



export default function MaterialTopTabNavigator() {

    const TopTabs = createMaterialTopTabNavigator()

    const iconsSize = 25;
     return (
        <TopTabs.Navigator
       style={styles.container}
        screenOptions={{
            tabBarShowLabel: false
        }}
        >
            <TopTabs.Screen name={"Home"}
            component={Home}
            options={{
                title: "Inicio",
                tabBarIcon: props => (
                  <Ionicons name="ios-home" size={iconsSize} color={props.color} />
                )
              }}
            />

           <TopTabs.Screen name={'Reservas'}
           component={Reserve}
           options={{
            title: 'Reservas',
            headerShown: true,
            tabBarIcon: props => (
             <Ionicons name="add-circle" size={iconsSize} color={props.color}/>
           )
            }}
           />

           <TopTabs.Screen name={'Ubicacion'} 
           component={Maps}
           options={{
            title: 'Ubicacion',
            headerShown: true,
            tabBarIcon: props => (
             <Ionicons name="location" size={iconsSize} color={props.color}/>
           )
            }}/>

           <TopTabs.Screen name={'Calificaciones'} 
           component={Califications} 
           options={{
               title: 'Calificaciones',
               headerShown: true,
               tabBarIcon: props => (
                <Ionicons name="star" size={iconsSize} color={props.color}/>
              )
               }}/>

           <TopTabs.Screen name={'Cuenta'} 
           component={Contact}
           options={{ 
            title: "Cuenta",
            tabBarIcon: props => (
              <Ionicons name="person-circle-outline" size={iconsSize} color={props.color}/>
            )
          }}/>
        </TopTabs.Navigator>
     )
}
  const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight
    },
  });

