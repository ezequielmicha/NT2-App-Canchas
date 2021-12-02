import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import GlobalContext from '../../../components/globals/context';
import { addReserve, getAllReserves, getReservesByUserId } from "../../../components/axios/index";
import { call } from "../../../components/wizard/index";

export default () => {
    const {DataReserve} = useContext(GlobalContext);
    const {AuthData} = useContext(GlobalContext);

    const agregarReserva = async () => {
        try {
            // console.log("ID", AuthData._id);
            // console.log("date", DataReserve.date);
            // console.log("hour", DataReserve.hour);
            // console.log("courtSize", DataReserve.courtSize);

            // console.log("courtSize_TYPE", DataReserve.courtSize.type);
            // no estamos pudiendo validar que todos los datos de la reserva sean distintos de null
            // en el if de abajo deberia validar eso tambien para poder agregar una reserva
            if (await verificarReserva()) {
                addReserve(AuthData._id, DataReserve.date, DataReserve.hour, DataReserve.courtSize);
                alert("Reserva agregada correctamente")
            } 
            else {
                alert("No se pudo agregar la reserva. Vuelva a seleccionar las opciones")
            }
        } catch (error) {
            
        }
    }

    const verificarReserva = async () => { 
        var res = true;
        const myReserves = await getAllReserves();
        const findReserve = await myReserves.find(reserve => reserve.date === DataReserve.date && reserve.hour === DataReserve.hour && reserve.courtSize === DataReserve.courtSize);
            
        const userReserves = await getReservesByUserId(AuthData._id);
        const findUserReserve = await userReserves.find(reserve => reserve.date === DataReserve.date && reserve.hour === DataReserve.hour);

        if (findReserve){
            alert("Turno ya reservado")
            res = false;
        }
        
        if (findUserReserve){
            alert("Usted ya tiene una reserva en este día y horario")
            res = false;
        }
        
        return res;    
    }

    return (
        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View style={styles.button}>
                 <Text style={{fontSize:18,textAlign: 'center', padding: 15, color: "brown"}}>Usted está por reservar el siguiente turno</Text>
                 <Text style={{fontSize:15,textAlign: 'left'}}>Tamaño de la cancha: {DataReserve.courtSize}</Text>
                 <Text style={{fontSize:15,textAlign: 'left'}}>Día: {DataReserve.date}</Text>
                 <Text style={{fontSize:15,textAlign: 'left'}}>Hora: {DataReserve.hour}</Text>
                 <Button title="Verificar disponibilidad del turno y agendar" onPress={agregarReserva}/>
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