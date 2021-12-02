import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import GlobalContext from '../../components/globals/context';
// import Constants from "expo-constants";
import FlatListContacts from '../../components/userReserveList/flatList';
import { useFocusEffect } from '@react-navigation/native';
import { getReservesByUserId } from "../../components/axios/index";

export default ({navigation}) => {
    const {AuthData, setAuthData} = useContext(GlobalContext)
    const reserves = async () => {
       const newReserves = await getReservesByUserId(AuthData._id);
       setAuthData({...AuthData, reserves: newReserves})
    }

    useFocusEffect(
        React.useCallback(() => {
            reserves();            
        }, [])
    );

    const goToCalifications = () => {
        navigation.navigate("Calificaciones")
    }
    
    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondo.png')} style={styles.background}>
            <StatusBar style={'auto'} />
            <View>
            {/* <Text style={styles.text}> LAS CANCHAS LA LORA!! </Text> */}
            <Text style={styles.text}> ¡Bienvenid@ {AuthData.name}! </Text>
            <Text style={styles.text}> Estas son tus reservas hasta la fecha: </Text>
            <Text style={styles.text2}> Presioná sobre la reserva que queres calificar </Text>
            <FlatListContacts reserves={AuthData.reserves} goToCal={goToCalifications}/>
                  <Button
                    title="NUEVA RESERVA"
                    color='black'
                    onPress={() =>{
                         navigation.navigate("Reservas")
                    }}
                />
            </View>
            </ImageBackground>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center"
    },
    text2: {
        color: 'black',
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 15,
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
    }
});