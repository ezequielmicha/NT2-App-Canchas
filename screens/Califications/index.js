import React, { useState, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import starFilledImg from '../../assets/starFilled.png';
import starCornerImg from '../../assets/starCorner.png';
import { addCalification, markReserveAsCalificated, getCalificationsBySize } from "../../components/axios/index";
import GlobalContext from '../../components/globals/context';
import { useFocusEffect } from '@react-navigation/native';

export default ({navigation}) => {
    const {ReserveToCalificate, AuthData, setReserveToCalificate} = useContext(GlobalContext)
    const [defaultRating, setdefaultRating] = useState(2);
    const [maxRating, setmaxRating] = useState([1,2,3,4,5]);
    const [promF5, setPromF5] = useState(0)
    const [promF7, setPromF7] = useState(0)
    const [promF9, setPromF9] = useState(0)
   
    const setProm = async () => {
        setPromF5(getProm(await getCalificationsBySize(5)))
        setPromF7(getProm(await getCalificationsBySize(7)))
        setPromF9(getProm(await getCalificationsBySize(9)))
    }

    const getProm = (califications) => {
        let total = califications.reduce((a, b) => a + b, 0);
        return (total/califications.length).toFixed(2)
    } 
 
    useFocusEffect(
         React.useCallback(() => {
            setProm();            
         }, [])
    );

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
            <View >
                <Text style={styles.title}>Esta es la reserva seleccionada para calificar el estado de la cancha:</Text>
                <Text style={styles.textStyle2}>Dia: {ReserveToCalificate.date}</Text>
                <Text style={styles.textStyle2}>Horario: {ReserveToCalificate.hour}</Text>
                <Text style={styles.textStyle2}>Cancha: {ReserveToCalificate.courtSize}</Text>

                <CustomRatingBAr/>
                <Text style={styles.textStyle}>
                    {defaultRating + ' / ' + maxRating.length}
                </Text>
                <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() =>{
                    if (ReserveToCalificate.date === "") {
                        alert("No hay ninguna reserva seleccionada para calificar")
                        navigation.navigate("Home")
                    } else {
                        if (ReserveToCalificate.calificated === true) {
                            alert("Esta reserva ya fue calificada. Seleccione otra por favor")
                            navigation.navigate("Home")
                        } else {
                            addCalification(parseInt(ReserveToCalificate.courtSize.replace("F","")), parseInt(defaultRating))
                             markReserveAsCalificated(AuthData._id, ReserveToCalificate.date, ReserveToCalificate.hour, ReserveToCalificate.courtSize, ReserveToCalificate.calificated)
                             setReserveToCalificate({...ReserveToCalificate, calificated : true})
                             alert(`Used ha calificado a la reserva con puntaje ${defaultRating}`)
                            }
                        } 
                    }
                }
                >
                    <Text> Presionar para calificar la cancha</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle3}> Promedio de puntajes cancha de F5: <Text style={styles.textStyle4}> {promF5} </Text> </Text>
                <Text style={styles.textStyle3}> Promedio de puntajes cancha de F7: <Text style={styles.textStyle4}> {promF7} </Text> </Text>
                <Text style={styles.textStyle3}> Promedio de puntajes cancha de F9: <Text style={styles.textStyle4}> {promF9} </Text> </Text>
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
        fontSize: 25,
      },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        marginTop: 20
    },
    textStyle2: {
        textAlign: 'left',
        fontSize: 23,
        marginTop: 20,
        marginLeft: 25
        
    },
    textStyle3: {
        textAlign: 'left',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 25,
    },
    textStyle4: {
        textAlign: 'left',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 25,
        fontWeight: "bold",
        color: "yellow"
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
        backgroundColor: 'pink'
    }
});