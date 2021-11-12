import React, { useContext } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import GlobalContext, { authData } from '../../components/globals/context';

export default () => {
    const {AuthData, setAuthData, setIsAuthenticated} = useContext(GlobalContext)

    const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId: '685862109228-tt7qdtrub1to86447g8mol2a9gb0posb.apps.googleusercontent.com',
      iosClientId: '98772052509-890p76ct0ab3g8imts7s6qad2u1fpctc.apps.googleusercontent.com',
      androidClientId: '98772052509-8bm8snd9i8t0m91fcbp28lg5d3mkrone.apps.googleusercontent.com',
      //webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });
  
    React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
            console.log('authentication Data', authentication)
            // Llamo a la API de google para traerme la info del usuario
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
            .then(res => res.json())
            .then(data=>{
            console.log('User data', data)
            setAuthData({...AuthData, name: data.name, email: data.email, picture: data.picture})
            setIsAuthenticated(true)
        })
    }
}, [response]);
  
return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
                activeOpacity={0.7}
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
        height: 300,
  }
});