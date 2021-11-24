import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Wizard from '../../components/wizard';
import prueba from '../../components/axios/index'
import axios from 'axios';
import GlobalContext from '../../components/globals/context';


export default () => {
    prueba.getAllReserves()
    prueba.getUserByEmail()
    prueba.getReservesById()
    
    


    return (
       
        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View>
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