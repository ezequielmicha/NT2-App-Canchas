import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { defaultFormatUtc } from 'moment';
import GlobalContext, { dataReserve } from '../../../components/globals/context';

export default function App() {
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const {DataReserve, setDataReserve} = useContext(GlobalContext);

  useEffect(() => {
    console.log('Cambie mi fecha!!!!', date)
    setDataReserve({...DataReserve, date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`, hour: date.getHours().toString()});
  }, [date]);



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={showDatepicker} title="Seleccionar fecha" />
      </View>
      <View style={styles.button}>
        <Button onPress={showTimepicker} title="Seleccionar hora" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          //minimumDate={new Date()}
          //maximumDate={new Date()}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   button: {
    marginTop: 10,
    marginBottom: 40
   }

   
});