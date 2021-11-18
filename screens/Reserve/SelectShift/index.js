import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View style={styles.button}>
                 <Button title="Verificar disponibilidad del turno" />
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