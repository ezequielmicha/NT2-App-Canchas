import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../../screens/Login';



export default function LoginNavigator() {


    const Stack = createStackNavigator();
  
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>              
              <Stack.Screen name={"Login"} component={Login} />
        </Stack.Navigator>
    );
  }