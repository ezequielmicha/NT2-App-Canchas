import React from "react";

const authData = {
    name: "namePorDefecto",
    email: "mailPorDefecto",
    photoUrl: "photoPorDefecto"
}

const sizeSelected = '';

const isAuthenticated = false;

export { authData, isAuthenticated, sizeSelected }

export default React.createContext(authData)