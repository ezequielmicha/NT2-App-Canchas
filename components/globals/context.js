import React from "react";

const authData = {
    _id: "",
    email: "",
    name: "",
    last: "",
    password: "123456",
    userName: "",
    reserves: [],
    photoUrl: ""
}

const dataReserve = {
    date: "",
    hour: "",
    courtSize: "",
    userEmail: "",
    calificated: "",
    payMethod: ""
}

const reserveToCalificate = {
    date: "",
    hour: "",
    courtSize: "",
    calificated: ""
}

const isAuthenticated = false;

export { authData, isAuthenticated, dataReserve, reserveToCalificate }

export default React.createContext({ authData, isAuthenticated, dataReserve, reserveToCalificate })