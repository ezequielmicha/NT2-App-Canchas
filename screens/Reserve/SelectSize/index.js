import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import GlobalContext, { dataReserve, authData } from '../../../components/globals/context';

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'F5',
    value: 'option1'
}, {
    id: '2',
    label: 'F7',
    value: 'option2'
}, {
    id: '3',
    label: 'F9',
    value: 'option3'
}]

export default () =>{
    const {DataReserve, setDataReserve} = useContext(GlobalContext);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const {AuthData} = useContext(GlobalContext);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        // console.log(radioButtons);
        const size = radioButtons.find(item => item.selected === true);
        // console.log(size.label);
        setDataReserve({...DataReserve, courtSize: size.label, userEmail: AuthData.email});
    }

    return (
        <View>
            <Text style={styles.text} > Seleccione el tamaño de la cancha de fútbol que desea reservar</Text>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
            />
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
     }
});