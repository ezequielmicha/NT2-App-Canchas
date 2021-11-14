import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

// GoogleSignin.configure({
//   webClientId: '198056780059-cuunk2bi9oo7q5ek9hcsde2h74n96bcj.apps.googleusercontent.com',
// });

import * as Google from 'expo-google-app-auth';
import GlobalContext, { authData } from '../../components/globals/context';

export default () => {
    const {AuthData, setAuthData, setIsAuthenticated} = useContext(GlobalContext);
    async function signInWithGoogleAsync() {
  
        console.log("Inicia logueo... ")
        try {
          
          const config = {
            // Se tiene que configurar un clientID para una App en iOS (pueden usar esta que estara disponible hasta el 31 de octubre)
            iosClientId: `33860000961-hc93104d0s5ovs1t7jmcapdkvrdefu82.apps.googleusercontent.com`,
            // Se tiene que configurar un clientID para una App en Android (pueden usar esta que estara disponible hasta el 31 de octubre)
            androidClientId: `33860000961-un4ghka1k2sepcnj4gvqeoge4bndf25k.apps.googleusercontent.com`,
          };
           
          const result = await Google.logInAsync(config);
          console.log("Result: ", result)
          const { type, accessToken } = result;
          
          setAuthData({...AuthData, name: result.user.name, email: result.user.email, photoUrl: result.user.photoUrl})
          //console.log(result.user.name);
          setIsAuthenticated(true);
      
          if (type === 'success') {
            /* Log-Out */
            
            await Google.logOutAsync({ accessToken, ...config });
            /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
          }
        } catch (e) {
          console.error("Error: ", e)
          return { error: true };
        }
      }    
  return (
     
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Asi seria con un boton normal */}
      {/* <Button
        title="Google Sign in"
        onPress={() => signInWithGoogleAsync()}
      /> */}

      {/* Asi seria con un TouchableOpacity que permite agregar varios elementos para que sean "touchables" */}
      {/* En este ejemplo yo les puse una simple imagen para Google Sign In */}
      <View>
        <Image
        source={require('../../assets/logo.png')}
        style={{width: 110, height: 110,}}
        />
        <Text style={styles.titles}>¡Hola!</Text>
        <Text style={{fontSize:20,textAlign: 'center'}}>No te quedes sin tu lugar</Text>
        <Text style={{fontSize:20,textAlign: 'center'}}>Logueate para continuar</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonGPlusStyle}
        activeOpacity={0.2}
        onPress={() => signInWithGoogleAsync()}
        >
        <Image
          source={require('../../assets/sign-in.png')}
          style={styles.buttonImageIconStyle}
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
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.1,
    borderColor: '#fff',
    borderRadius: 0.1,
    margin: 60,
  },
  buttonImageIconStyle: {
    width: 500,
    height: 60,
  },
  titles: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
});