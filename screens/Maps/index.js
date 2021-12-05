import React from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { Linking } from 'react-native';


export default () => {

    const handleMapsPress = async () => {
        await Linking.openURL("https://maps.google.com/?q=-34.5495121810971,-58.45409442927962");
    };

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
              >
             <Marker
                coordinate={{
                latitude: -34.5495121810971,
                longitude: -58.45409442927962
                
               }}
            onPress = {handleMapsPress}
            title="Marcador"
            description="Ubicacion canchas"
            />

            </MapView>     

           

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