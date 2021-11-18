import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import GlobalContext from '../../components/globals/context';

export default () => {
    
    const {AuthData} = useContext(GlobalContext)
    const {setIsAuthenticated} = useContext(GlobalContext);
    const logOut = async () => {
        await setIsAuthenticated(false)
    }
    
    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View>
            <Image
            style={styles.image}
            source={{uri: AuthData.photoUrl}}
                />
                <Text > LAS CANCHAS DE UN ANIMAL </Text>
                <Text > ¡Bienvenid@ {AuthData.name}! </Text>
                <Text > Tu mail registrado es: {AuthData.email} </Text>
                <Button
                        title="LOG OUT"
                        color='red'
                        onPress={logOut}
                        style={styles.logoutButton}
                />
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
        flexDirection: 'column',  
        paddingHorizontal: 10,
        paddingVertical: -10,
        borderRadius: 4, 
        textAlign: 'center'
    },
    logoutButton: {
        flex: 1,
        margin: 80,
        paddingTop: 20,
        justifyContent: 'space-between',
    },

     image: {
        width:90, 
        height: 90, 
        paddingBottom: 2,
        flexDirection: 'column',
        //fontWeight: 'bold',
        //fontSize: 30,
        marginBottom: 35,
        margin: 100
      },
});