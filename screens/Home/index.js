import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import GlobalContext from '../../components/globals/context';

export default () => {
    
    const {AuthData} = useContext(GlobalContext)
    
    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <View>
                <Text> LAS CANCHAS DE UN ANIMAL </Text>
                <Text> ¡Bienvenid@ {AuthData.name}! </Text>
                <Text> Tu mail registrado es: {AuthData.email} </Text>
                {/* <Image source={AuthData.picture} 
                // style={styles.buttonIconStyle}
                /> */}
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