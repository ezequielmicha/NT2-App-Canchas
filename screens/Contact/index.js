import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import GlobalContext from '../../components/globals/context';
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { Linking } from 'react-native';

export default () => {

    const {AuthData, setAuthData} = useContext(GlobalContext)
    const {setIsAuthenticated} = useContext(GlobalContext);

    const handleCallPress = async () => {
        await Linking.openURL("tel:+5491144109209");
    };

    const handleWhatsAppPress = async () => {
        await Linking.openURL("https://wa.me/+5491144109209?text= Hola, queria hacer una consulta sobre las canchas");
    };

    const handleEmailPress = async () => {
        await Linking.openURL("mailto:matias.c.imoff@gmail.com?subject=Consulta sobre las canchas");
    };

    const handleSMSPress = async () => {
        await Linking.openURL("sms:+5491144109209&body=Hola, queria hacer una consulta");
    };

    const logOut = async () => {
        const newAuthData = { _id: "", email: "", name: "", last: "", password: "123456", userName: "", reserves: [], photoUrl: "" }
        await setIsAuthenticated(false)
        await setAuthData(newAuthData)
    }

    return (
        <View style={styles.container}>
            
            <ImageBackground source={require('../../assets/fondo.png')} style={styles.background}>
         
       
            <StatusBar style={'auto'} />

            <Text style={styles.title}> CONTACTOS </Text>
            
            <View style = {styles.button}>
                
                <AwesomeButtonRick 
                type="secondary" style={styles.aniButtons} width={300}
                onPress={handleCallPress}>
                    <Text>Llamar</Text>
                </AwesomeButtonRick>

                <AwesomeButtonRick 
                type="secondary" style={styles.aniButtons} width={300}
                onPress={handleWhatsAppPress}>
                    <Text>WhatsApp</Text>
                </AwesomeButtonRick>

                <AwesomeButtonRick 
                type="secondary" style={styles.aniButtons} width={300}
                onPress={handleEmailPress}>
                    <Text>Email</Text>
                </AwesomeButtonRick>

                <AwesomeButtonRick 
                type="secondary" style={styles.aniButtons} width={300}
                onPress={handleSMSPress}>
                    <Text>SMS</Text>
                </AwesomeButtonRick>
                
            </View>
            
            <Image
            style={styles.image}
            source={{uri: AuthData.photoUrl}}/>

            <Text style={styles.text}> Tu mail registrado es: {AuthData.email} </Text>
            
            <AwesomeButtonRick type="primary" style={styles.aniButtons} width={300}
            backgroundColor={'#fc3535'}
            borderColor={'#a11d1d'}
            backgroundShadow={'#821b1b'}
            backgroundDarker={'#821b1b'}
            onPress={logOut}
            >
                <Text style={{color:'white'}}>LOG OUT</Text>
            </AwesomeButtonRick>

            </ImageBackground>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20,
        fontSize: 30,
    },
    text: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 5,
        fontSize: 20,
        marginTop: 30,
        textAlign: "center"
    },

    background: {
        flex: 1,
        justifyContent: "center",
        width: 400
      },

    button: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    aniButtons: {
        margin: 10,
        alignSelf: 'center',
    },
    image: {
        width: 90, 
        height: 90,
        flexDirection: 'column',
        margin: 20,
        alignContent: 'center'
      },
});