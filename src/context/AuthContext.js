import { createContext, useState } from "react";


export const Auth = createContext();

export const AuthContext = (props) =>{


    const [user, setUser] = useState("Dan are mere")


    const userUpdate = (data) =>{
        setUser(data)

    }

    return (

        <Auth.Provider value={{user, setUser}}>
            {props.children}
        </Auth.Provider>

    )
}
