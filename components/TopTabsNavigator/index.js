import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from '../../screens/Home';
import Maps from '../../screens/Maps';
import Califications from '../../screens/Califications';
import Contact from '../../screens/Contact';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Reserve from '../../screens/Reserve';
import { Dimensions, StyleSheet, Text, View,ImageBackground } from 'react-native';



export default function MaterialTopTabNavigator() {


    const TopTabs = createMaterialTopTabNavigator()
  
    return (
        
        <TopTabs.Navigator style={styles.container}>
            <TopTabs.Screen name={'Inicio'} component={Home}/>
            <TopTabs.Screen name={'Reservas'} component={Reserve} />
            <TopTabs.Screen name={'Ubicacion'} component={Maps}/>
            <TopTabs.Screen name={'Calificaciones'} component={Califications} options={{ title: 'Calificaciones', headerShown: false }}/>
            <TopTabs.Screen name={'Cuenta'} component={Contact}/>
        </TopTabs.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
      fontSize: 1,
      fontWeight: "bold",
      margin: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      minWidth: "48%",
      marginHorizontal: "-2%",
      textAlign: "center",
      marginBottom: -10,
      fontSize: 14,
      paddingHorizontal: 1,
      paddingVertical: 1,
      borderRadius: 4,
     

    },
    background : {
        flex: 1,
        justifyContent: "center",
        width: 400
    },
    
  });