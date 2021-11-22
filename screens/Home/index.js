import React, { useState, useEffect, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import GlobalContext from '../../components/globals/context';
import { getAllReserves, getUserByEmail, getReservesByUserId, addUser } from "../../components/axios/index"
import Constants from "expo-constants";
import FlatListContacts from '../../components/userReserveList/flatList'

export default () => {
    const {AuthData} = useContext(GlobalContext)
    const {NewUser} = useContext(GlobalContext)
    const {setIsAuthenticated} = useContext(GlobalContext);
    
    const [user, setUser] = useState([]);
    const [userReserves, setUserReserves] = useState([]);
    
    useEffect(async () => {
        try {
                
            const myUser = await getUserByEmail(NewUser.email);
            setUser(myUser)
            
            if(user === null){
                await addUser(NewUser.email, NewUser.name, NewUser.last, NewUser.password, NewUser.userName, NewUser.reserves);
            }
            
        } catch {
            
        }
        
    }, [])

    useEffect(async () => {
        try {
            console.log("USER ID",user._id);
            const loggedUserReserves = await getReservesByUserId(user._id);
            setUserReserves(loggedUserReserves);
            
        } catch {
            
        }
        
    }, [])

    console.log("MONGO USER", user);
    console.log('RESERVAS USUARIO', userReserves);

    const logOut = async () => {
        await setIsAuthenticated(false)
    }
    
        
    
    
    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View>
            <FlatListContacts reserves={userReserves} />
            <Image
            style={styles.image}
            source={{uri: AuthData.photoUrl}}
                />
                <Text > LAS CANCHAS LA LORA!! </Text>
                <Text > ¡Bienvenid@ {AuthData.name}! </Text>
                <Text > Tu mail registrado es: {AuthData.email} </Text>
                <Button
                        title="LOG OUT"
                        //color='red'
                        onPress={logOut}
                        style={styles.logoutButton}
                />
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
        flexDirection: 'column',  
        paddingHorizontal: 10,
        paddingVertical: -10,
        borderRadius: 4, 
        textAlign: 'center'
    },
    logoutButton: {
        flex: 1,
        margin: 80,
        paddingTop: 20,
        justifyContent: 'space-between',
    },

     image: {
        width:90, 
        height: 90, 
        paddingBottom: 2,
        flexDirection: 'column',
        //fontWeight: 'bold',
        //fontSize: 30,
        marginBottom: 35,
        margin: 100
      },
});