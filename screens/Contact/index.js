import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import { Linking } from 'react-native';

export default () => {

    const image = { uri: "https://www.ringtina.com.ar/Descargar/Fondos%20de%20Pantalla/Deportes/ImgDeportes%20056.jpg" };

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

    return (
        <View style={styles.container}>

<        ImageBackground source={image} resizeMode="cover" style={styles.image}>
         
       
            <StatusBar style={'auto'} />

            <Text style={styles.text}> CONTACTOS </Text>
            
            <View style = {styles.button}>
                
                <Button 
                color='yellow'
                title="Llamar" 
                onPress={handleCallPress}
                />
                <Button 
                color='yellow'
                title="WhatsApp" 
                onPress={handleWhatsAppPress}
                />
                <Button 
                color='yellow'
                title="Email" 
                onPress={handleEmailPress}
                />
                <Button 
                color='yellow'
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
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin:10
        
    },
    text: {
        color: 'black',
        flexDirection: 'column',
        fontSize: 30,
        marginBottom: 35,
        margin: 100

    },

    image: {
        flex: 1,
        justifyContent: "center"
      },

    button: {
        flex: 1,
        margin: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    }

});