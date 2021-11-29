import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import GlobalContext from '../../../components/globals/context';
import { addReserve } from "../../../components/axios/index";

export default () => {
    const {DataReserve} = useContext(GlobalContext);
    const {AuthData} = useContext(GlobalContext);

    const agregarReserva = ()=>{
        try {
            // console.log("ID", AuthData._id);
            // console.log("date", DataReserve.date);
            // console.log("hour", DataReserve.hour);
            // console.log("courtSize", DataReserve.courtSize);
            addReserve(AuthData._id, DataReserve.date, DataReserve.hour, DataReserve.courtSize);
        } catch (error) {
            
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View style={styles.button}>
                 <Text style={{fontSize:18,textAlign: 'center', padding: 15, color: "brown"}}>Usted está por reservar el siguiente turno</Text>
                 <Text style={{fontSize:15,textAlign: 'rigth'}}>Tamaño de la cancha: {DataReserve.courtSize}</Text>
                 <Text style={{fontSize:15,textAlign: 'rigth'}}>Día: {DataReserve.date}</Text>
                 <Text style={{fontSize:15,textAlign: 'rigth'}}>Hora: {DataReserve.hour}</Text>
                 <Button title="Verificar disponibilidad del turno" onPress={agregarReserva()}/>
            </View>
        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10,
        marginBottom: 40
       }
});