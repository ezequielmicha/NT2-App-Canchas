import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import GlobalContext from '../../components/globals/context';
import { getUserByEmail, addUser } from "../../components/axios/index";

export default () => {
    const {AuthData, setAuthData, setIsAuthenticated} = useContext(GlobalContext);
    async function signInWithGoogleAsync() {
    let userAdded; 
    
        console.log("Inicia el logueo")
        try {
          
          const config = {
            // Se tiene que configurar un clientID para una App en iOS (pueden usar esta que estara disponible hasta el 31 de octubre)
            iosClientId: `33860000961-hc93104d0s5ovs1t7jmcapdkvrdefu82.apps.googleusercontent.com`,
            // Se tiene que configurar un clientID para una App en Android (pueden usar esta que estara disponible hasta el 31 de octubre)
            androidClientId: `33860000961-un4ghka1k2sepcnj4gvqeoge4bndf25k.apps.googleusercontent.com`,
          };
           
          const result = await Google.logInAsync(config);
          console.log("Resultado del logueo: ", result)
          const { type, accessToken } = result;

          let myUser = await getUserByEmail(result.user.email);
              
              if(myUser === null){
                myUser = {
                  name: result.user.givenName,
                  last: result.user.familyName,
                  email: result.user.email,
                  password: AuthData.password,
                  userName: result.user.name,
                  reserves: AuthData.reserves,
                  photoUrl: result.user.photoUrl
                }

                 userAdded = await addUser(myUser.email, myUser.name, myUser.last, myUser.password, myUser.userName, myUser.reserves);
                 myUser._id = userAdded.insertedId;
              }
          // console.log("probando login", myUser);
          setAuthData(myUser)
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
      <View>
        <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
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
  logo: {
    flexDirection: 'row',
    width: 110, 
    height: 110,
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 60,
  },
});