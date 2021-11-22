import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ reserve }) => {
    return (
        <TouchableOpacity
            onPress={()=>console.log(contact)}
            //onLongPress={()=>console.log(`long press`, contact)}            
        >
            <View style={styles.row}>
                {/* <Text style={styles.text}>"Dia:"{reserve.date}</Text> */}
                <Text style={styles.text}>"Dia:"{reserve.date}</Text>
                <Text style={styles.text}>"Horario: "{reserve.hour}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15
    },
    text: {
        fontSize: 20
    }

})