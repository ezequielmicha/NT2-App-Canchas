import React from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default () => {

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <MapView style={styles.map}
            initialRegion={{
                latitude: -34.5495121810971,
                longitude: -58.45409442927962,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />

        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});