import React from "react";

const authData = {
    name: "",
    email: "",
    photoUrl: ""
}

const dataReserve = {
    date: "",
    hour: "",
    courtSize: "",
    userEmail: ""
}

const newUser = {
    email: "",
    name: "",
    last: "",
    password: "123456",
    userName: "",
    reserves: []
}

const isAuthenticated = false;

export { authData, isAuthenticated, dataReserve, newUser }

export default React.createContext({ authData, isAuthenticated, dataReserve })