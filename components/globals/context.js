import React from "react";

const authData = {
    name: "",
    email: "",
    photoUrl: ""
}

const dataReserve = {
    courtSize: "",
    date: "",
    hour: "",
    userEmail: ""
}

const isAuthenticated = false;

export { authData, isAuthenticated, dataReserve }

export default React.createContext({ authData, isAuthenticated, dataReserve })