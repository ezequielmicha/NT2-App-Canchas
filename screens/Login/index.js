import React, { useState, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View,TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import GlobalContext, { authData } from '../../components/globals/context';

export default () => {

    // const { AuthData, setAuthData } = useContext(GlobalContext)

    // const login = () => {
    //     setAuthData(authData)
    // }

    const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId: '685862109228-8gu8k5c3enrdd5u089q5cjs16vcghgk7.apps.googleusercontent.com',
      iosClientId: '572246048006-80da58eav5q7ch3leecpquheu754bulf.apps.googleusercontent.com',
      androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
      webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });
  
React.useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        console.log('authentication Data', authentication)
    
        // llamar a la API de google para traerme info del usuario
        // https://www.googleapis.com/oauth2/v1/userinfo?access_token=$%7Bauthentication.accessToken%7D
        fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
        .then(res => res.json())
        .then(data=>{
        console.log('User data', data)
        })
    }
}, [response]);
  
return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
                activeOpacity={0.7}
                //onPress={(login.setAuthData(promptAsync))}
                onPress={(promptAsync)}
            >
                <Image
                source={require('../../assets/sign-in.png')} 
                style={styles.buttonIconStyle}
                />
                
            </TouchableOpacity>

    </View>
  );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
},
buttonIconStyle:{
        resizeMode: 'stretch',
        width: 600,
        height: 270,
  }
});