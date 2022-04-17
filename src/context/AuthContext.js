import { createContext, useState } from "react";

const AuthContext = (props) =>{

    const Auth = createContext();

    const data = {};

    return (

        <Auth.Provider value={{data}}>
            {props.children}
        </Auth.Provider>

    )
}


export default {AuthContext}