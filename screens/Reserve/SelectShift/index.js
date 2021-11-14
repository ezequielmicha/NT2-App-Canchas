import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <View>
                <Text style={styles.container}> SELECT SHIFT </Text>
                <TouchableOpacity>
                
                    


                    <View>

                    </View>
                </TouchableOpacity>

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