import React from "react";

const authData = {
    name: "namePorDefecto",
    email: "mailPorDefecto",
    photoUrl: "photoPorDefecto"
}

const isAuthenticated = false;

export { authData, isAuthenticated }

export default React.createContext(authData)