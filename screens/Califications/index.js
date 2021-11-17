import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default () => {

    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondo.png')} style={styles.background}>
            <StatusBar style={'auto'} />

            <View>
                <Text style={styles.title}>CALIFICACIONES</Text>
            </View>
            </ImageBackground>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background : {
        flex: 1,
        justifyContent: "center",
        width: 400
    },
    title: {
        flexDirection: 'column',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
      },
});