import React from "react";

const authData = {
    name: "namePorDefecto",
    email: "mailPorDefecto",
    photoUrl: "photoPorDefecto"
}

const dataReserve = {
    courtSize: "",
    date: "",
    hour: "",
    userEmail: authData.email
}

const isAuthenticated = false;

export { authData, isAuthenticated, dataReserve }

export default React.createContext({ authData, isAuthenticated, dataReserve })