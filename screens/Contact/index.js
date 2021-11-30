import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import GlobalContext from '../../components/globals/context';
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

            <Image
            style={styles.image}
            source={{uri: AuthData.photoUrl}}/>

            <Text style={styles.text}> Tu mail registrado es: {AuthData.email} </Text>
         
            <Button
            title="LOG OUT"
            color='red'
            onPress={logOut}
            style={styles.button}/>

            <Text style={styles.title}> CONTACTOS </Text>
            
            <View style = {styles.button}>
                
                <Button 
                color='black'
                title="Llamar" 
                onPress={handleCallPress}
                />
                <Button 
                color='black'
                title="WhatsApp" 
                onPress={handleWhatsAppPress}
                />
                <Button 
                color='black'
                title="Email" 
                onPress={handleEmailPress}
                />
                <Button 
                color='black'
                title="SMS" 
                onPress={handleSMSPress}
                />
                
            </View>

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
        fontSize: 30,
        margin: 10

    },
    text: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
        textAlign: "center"
    },

    background: {
        flex: 1,
        justifyContent: "center",
        width: 400
      },

    button: {
        flex: 1,
        margin: 30,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image: {
        width: 90, 
        height: 90,
        flexDirection: 'column',
        margin: 30,
        alignContent: 'center'
      },
});