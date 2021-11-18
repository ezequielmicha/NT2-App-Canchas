import React, { useState, useContext } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import GlobalContext, { dataReserve } from '../../../components/globals/context';

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Futbol 5',
    value: 'option1'
}, {
    id: '2',
    label: 'Futbol 7',
    value: 'option2'
}, {
    id: '3',
    label: 'Futbol 9',
    value: 'option3'
}]

export default () =>{
    const {DataReserve, setDataReserve} = useContext(GlobalContext);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        console.log(radioButtons);
        const size = radioButtons.find(item => item.selected === true);
        console.log(size.label);
        setDataReserve({...DataReserve, courtSize: size.label})
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

}