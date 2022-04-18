import { createContext, useState, useEffect } from "react";
import {footbalAuth} from "../firebase/config";


export const Auth = createContext();

export const AuthContext = (props) =>{


    const [user, setUser] = useState(null);
    const [authIsReady, setAuthIsReady] = useState(false)


    const userUpdate = (data) =>{
        setUser(data)

    }


    useEffect(() =>{

        footbalAuth.onAuthStateChanged((user) =>{
            setUser(user)
        })

    }, [])

    return (

        <Auth.Provider value={{user, setUser}}>
            {props.children}
        </Auth.Provider>

    )
}
