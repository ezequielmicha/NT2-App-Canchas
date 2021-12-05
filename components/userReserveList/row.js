import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from 'react-native-reanimated';
import GlobalContext from '../../components/globals/context';

export default ({ reserve, goToCal }) => {
    const {setReserveToCalificate} = useContext(GlobalContext)
    return (
        <TouchableOpacity
            onPress={
                () =>{
                    if (!reserve.calificated) {
                        setReserveToCalificate(reserve)
                        goToCal()
                    } else {
                        alert("Esta reserva ya fue calificada")
                    }
            }
        }
        >
            <View style={styles.row}>
                <Text style={styles.text}>Dia: <Text style={styles.text3}> {reserve.date} </Text></Text>
                <Text style={styles.text}>Horario: <Text style={styles.text3}> {reserve.hour} </Text></Text>
                <Text style={styles.text}>Cancha: <Text style={styles.text3}> {reserve.courtSize} </Text></Text>
                {(reserve.calificated) == false ? <Text style={styles.text2}>Reserva no calificada </Text> : null }
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15,
    },
    text: {
        fontSize: 18,
    },
    text2: {
        fontSize: 16,
        color: "red"
    },
    text3: {
        fontSize: 20,
        fontWeight: "bold",
    }

})