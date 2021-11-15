import React, { useState, createClass } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default () => {
    const radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
      ];
       
      

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <View>
                <Text> Seleccionar tamaño </Text>
                <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={(value) => {this.setState({value:value})}}/>
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
});