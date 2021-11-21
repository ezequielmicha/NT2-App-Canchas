import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, TextInput, View, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import starFilledImg from '../../assets/starFilled.png';
import starCornerImg from '../../assets/starCorner.png';

export default () => {

    const [defaultRating, setdefaultRating] = useState(2);
    const [maxRating, setmaxRating] = useState([1,2,3,4,5]);

    const starImgFilledUri = Image.resolveAssetSource(starFilledImg).uri;
    const starImgCornerUri = Image.resolveAssetSource(starCornerImg).uri;

    const CustomRatingBAr = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setdefaultRating(item)}
                            >
                            <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                ? {uri: starImgFilledUri}
                                : {uri: starImgCornerUri}
                            }
                            />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondo.png')} style={styles.background}>
            <StatusBar style={'auto'} />

            <View>
                <Text style={styles.title}>CALIFICACIONES</Text>

                <CustomRatingBAr/>
                <Text style={styles.textStyle}>
                    {defaultRating + ' / ' + maxRating.length}
                </Text>
                <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => alert(defaultRating)}
                >
                    <Text> Por favor, calificá las canchas</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
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
    background : {
        flex: 1,
        justifyContent: "center",
        width: 400
    },
    title: {
        flexDirection: 'column',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
      },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        marginTop: 20
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: 'green'
    }
});