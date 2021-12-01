import React, { useState, useEffect, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import GlobalContext from '../../components/globals/context';
import Constants from "expo-constants";
import FlatListContacts from '../../components/userReserveList/flatList';
import { useFocusEffect } from '@react-navigation/native';
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
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
     
    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondo.png')} style={styles.background}>
            <StatusBar style={'auto'} />
            <View>
            <Text style={styles.text}> LAS CANCHAS LA LORA!! </Text>
            <Text style={styles.text}> ¡Bienvenid@ {AuthData.name}! </Text>
            <Text style={styles.text}> Estas son tus reservas hasta la fecha: </Text>
            <FlatListContacts reserves={AuthData.reserves} />
                  <AwesomeButtonRick
                  style={styles.aniButtons}
                  type={'secondary'}
                  width={300}
                    onPress={() =>{
                         navigation.navigate("Reservas")
                    }}
                ><Text>NUEVA RESERVA</Text></AwesomeButtonRick>
            </View>
            </ImageBackground>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center"
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: 400
      },
    aniButtons: {
        margin: 10,
        alignSelf: 'center',
    },
});