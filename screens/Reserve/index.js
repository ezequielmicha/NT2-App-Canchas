import React, { useState, navigation } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import moment from 'moment';
import SelectSize from './SelectSize';
import { NavigationContainer } from '@react-navigation/native';
import Wizard from '../../components/wizard';
import prueba from '../../components/axios/index'
import axios from 'axios';



export default () => {
    // async function getReserves(){
    //     const reserves = await axios.get('http://localhost:3000/api/reserves')
    //     .then(function (response) {
    //       console.log(response);
    //     });
    //     console.log(reserves);
    //     return reserves;
    // }
    // getReserves();
//     fetch('http://localhost:3000/api/reserves')
//             .then(res => res.json())
//             console.log(res);
//             // .then(data=>{
//             //     console.log('reserves', data)
                
//             // })
//    //console.log(data);
    // const reserves = getReserves().json();
    // console.log(reserves);
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
    },
});