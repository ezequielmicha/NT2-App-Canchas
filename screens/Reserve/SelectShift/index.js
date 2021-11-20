import React, { useState, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import mongoDB from '../../../components/connectionMongo/index'
import GlobalContext, { dataReserve, authData } from '../../../components/globals/context';

export default () => {
    const {DataReserve} = useContext(GlobalContext);
    const {AuthData} = useContext(GlobalContext);
    const email = AuthData.email;
    const date = DataReserve.date;
    const hour = DataReserve.hour;
    const courtSize = DataReserve.courtSize;

    const agregarReserva = ()=>{
        try {
            console.log(email);
            console.log(date);
            console.log(hour);
            console.log(courtSize);
            mongoDB.addReserveByEmail(email,date,hour, courtSize);
        } catch (error) {
            
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View style={styles.button}>
                 <Button title="Verificar disponibilidad del turno" onPress={agregarReserva()}/>
            </View>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10,
        marginBottom: 40
       }
});