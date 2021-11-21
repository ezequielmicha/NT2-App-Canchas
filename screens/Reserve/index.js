import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Wizard from '../../components/wizard';

export default () => {
    
    return (
       
        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <View>
                    
            
                <Wizard/>
                
            </View>

        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 40,
        borderRadius: 4,
    },
});