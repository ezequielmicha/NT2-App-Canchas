import React, { useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import GlobalContext from '../../../components/globals/context';
import { addReserve, getAllReserves, getReservesByUserId } from "../../../components/axios/index";
import { call } from "../../../components/wizard/index";

export default ({next, prev}) => {
    const {DataReserve} = useContext(GlobalContext);
    const {AuthData} = useContext(GlobalContext);

    const agregarReserva = async () => {
        try {
            if (DataReserve.courtSize === "") {
                alert("No puede agregar una reserva sin especificar el tamaño de la cancha")
            }
            else {
                if (await verificarReserva()) {
                    addReserve(AuthData._id, DataReserve.date, DataReserve.hour, DataReserve.courtSize);
                    alert("Reserva agregada correctamente")
                    next()
                } 
                else {
                    alert("No se pudo agregar la reserva. Vuelva a seleccionar las opciones")
                    prev()
                }
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

        if (findReserve && findUserReserve) {
            alert("Usted ya tiene una reserva en este día y horario")
            res = false;
        } else if (findReserve) {
            alert("Turno ya reservado")
            res = false;
        } else if (findUserReserve) {
            alert("Usted ya tiene una reserva en este día y horario")
            res = false;
        }{
            
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