import React, { useState, navigation } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import moment from 'moment';
import SelectSize from './SelectSize';
import { NavigationContainer } from '@react-navigation/native';
import Wizard from '../../components/wizard';


export default () => {

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <View>
                <Text> RESERVAR CANCHA </Text>

                <Wizard/>
                
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
        paddingHorizontal: 12,
        paddingVertical: 40,
        borderRadius: 4,
    },
});