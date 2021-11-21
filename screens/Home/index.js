import React, { useState, useEffect, useContext } from 'react';
import { Button, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import GlobalContext from '../../components/globals/context';
import { getAllReserves, getUserByEmail, getReservesByUserId, addUser } from "../../components/axios/index"

export default () => {
    const {AuthData} = useContext(GlobalContext)
    const {NewUser} = useContext(GlobalContext)
    const {setIsAuthenticated} = useContext(GlobalContext);
    const logOut = async () => {
        await setIsAuthenticated(false)
    }

    const [reserves, setReserves] = useState([]);
    const [user, setUser] = useState([]);
    const [userReserves, setUserReserves] = useState([]);

    useEffect(async () => {
        try {
            let myReserves = await getAllReserves();
            setReserves(myReserves);
            let myUser = await getUserByEmail(AuthData.email);
            setUser(myUser)
            if (myUser == null){
                const newUser = {
                    email: NewUser.email,
                    name: NewUser.name,
                    last: NewUser.last,
                    password: NewUser.password,
                    userName: NewUser.userName,
                    reserves: NewUser.reserves
                }
                let resAddUser = await addUser(newUser);
                console.log("resAddUser", resAddUser);
            }
            let myUserReserves = await getReservesByUserId(user._id);
            setUserReserves(myUserReserves)
        } catch {
            
        }
        
    }, [])
    
    console.log("Todas_Las_Reservas:", reserves);
    console.log("My_User:", user);
    if (user != null){
        console.log("My_ID:", user._id)  
        console.log(`ESTAS SON LAS RESERVAS DEL USER ${user.userName}:`, userReserves);
    } else {
        console.log("No hay usuario registrado con ese ID");
    }
        
    
    
    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />
            <View>
            <Image
            style={styles.image}
            source={{uri: AuthData.photoUrl}}
                />
                <Text > LAS CANCHAS DE UN ANIMAL </Text>
                <Text > ¡Bienvenid@ {AuthData.name}! </Text>
                <Text > Tu mail registrado es: {AuthData.email} </Text>
                <Button
                        title="LOG OUT"
                        color='red'
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