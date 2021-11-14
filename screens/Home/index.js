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
            style={{width:90, height: 90, paddingBottom: 20}}
            source={{uri: AuthData.photoUrl}}
                />
                <Text> LAS CANCHAS DE UN ANIMAL </Text>
                <Text> ¡Bienvenid@ {AuthData.name}! </Text>
                <Text> Tu mail registrado es: {AuthData.email} </Text>
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
    },
    logoutButton: {
        flex: 1,
        margin: 80,
        paddingTop: 20,
        justifyContent: 'space-between',
    },
});