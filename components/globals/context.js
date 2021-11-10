import React from "react";

const authData = {
    name: "namePorDefecto",
    email: "mailPorDefecto",
    picture: "picturePorDefecto"
}

const isAuthenticated = false;

export { authData, isAuthenticated }

export default React.createContext(authData)