import React, { useState } from 'react';
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
            
            <ImageBackground source={require('../../assets/fondo.png')} style={styles.background}>
         
       
            <StatusBar style={'auto'} />

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 35,
        margin: 100

    },

    background: {
        flex: 1,
        justifyContent: "center",
        width: 400
      },

    button: {
        flex: 1,
        margin: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    }

});