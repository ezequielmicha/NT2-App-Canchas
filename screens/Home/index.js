import React, { useState, useEffect, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import GlobalContext from '../../components/globals/context';
import Constants from "expo-constants";
import FlatListContacts from '../../components/userReserveList/flatList';
import { useFocusEffect } from '@react-navigation/native';
import { getReservesByUserId } from "../../components/axios/index";

export default ({navigation}) => {
    const {AuthData, setAuthData, setDataReserve} = useContext(GlobalContext)
    const {setIsAuthenticated} = useContext(GlobalContext);

    const reserves = async () => {
       const newReserves = await getReservesByUserId(AuthData._id);
       setAuthData({...AuthData, reserves: newReserves})
    }
        useFocusEffect(
          React.useCallback(() => {
             reserves();            
          }, [])
        );
      
    const logOut = async () => {
        const newAuthData = { _id: "", email: "", name: "", last: "", password: "123456", userName: "", reserves: [], photoUrl: "" }
        const newDataReserve = { date: "", hour: "", courtSize: "", userEmail: "" }
        await setIsAuthenticated(false)
        await setAuthData(newAuthData)
        await setDataReserve(newDataReserve)
    }
     
    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View>
            <FlatListContacts reserves={AuthData.reserves} />
            <Image
            style={styles.image}
            source={{uri: AuthData.photoUrl}}
            
                />
                  <Button
                    title="NUEVA RESERVA"
                    //color='red'
                    onPress={() =>{
                         navigation.navigate("Reservas")
                    }}
                    style={styles.logoutButton}
                />

                <Text > LAS CANCHAS LA LORA!! </Text>
                <Text > ¡Bienvenid@ {AuthData.name}! </Text>
                <Text > Tu mail registrado es: {AuthData.email} </Text>
                <Button
                        title="LOG OUT"
                        //color='red'
                        onPress={logOut}
                        style={styles.logoutButton}
                />
            </View>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',  
        paddingHorizontal: 10,
        paddingVertical: -10,
        borderRadius: 4, 
        textAlign: 'center'
    },
    logoutButton: {
        flex: 1,
        margin: 80,
        paddingTop: 20,
        justifyContent: 'space-between',
    },

     image: {
        width:90, 
        height: 90, 
        paddingBottom: 2,
        flexDirection: 'column',
        //fontWeight: 'bold',
        //fontSize: 30,
        marginBottom: 35,
        margin: 100
      },
});