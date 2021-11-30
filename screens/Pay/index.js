import React, { useState, useContext } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import GlobalContext from '../../components/globals/context';

const radioButtonsData = [{
    id: '1', 
    label: 'Tarjeta de debito',
    value: 'option1'
}, {
    id: '2',
    label: 'Tarjeta de credito',
    value: 'option2'
}, {
    id: '3',
    label: 'MercadoPago',
    value: 'option3'
}, {
    id: '4',
    label: 'PayPal',
    value: 'option4'
}]

export default ({navigation}) =>{
    const {DataReserve, setDataReserve} = useContext(GlobalContext);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        const payMethodSel = radioButtons.find(item => item.selected === true);
        setDataReserve({...DataReserve, payMethod: payMethodSel.label});
    }

    return (
        <View>
            <Text style={styles.text} > Seleccione el medio para realizar el pago</Text>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
            />
            <View>
                    <Button style={styles.button}
                                title="PAGAR"
                                color='green'
                                onPress={() => {
                                    alert("Pago realizado correctamente")
                                    // navigation.navigate("Reservas")
                                }}
                        />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    text: {
      textAlign: "center",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50
     },
     button: {
        flex: 1,
        margin: 80,
        paddingTop: 20,
        justifyContent: 'space-between',
    }
});