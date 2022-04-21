import {footbalFirestore} from "../firebase/config";
import {useEffect, useState, useContext}  from "react";
import useCollection from "../hook/useCollection";
import {Link} from "react-router-dom";
import { Auth } from "../context/AuthContext";



const Team = () =>{

    const {user} = useContext(Auth);



    const {data, error, isPending} = useCollection("echipe_de_fotbal", ["uid", "==", user.uid])

   
    return (
        <div>
            <h1>Team</h1>

            {data && data.map(item => (
                <li key={item.id}><Link to={`${item.id}`}>{item.echipa}</Link></li>
            ))}

             
               
        </div>
    )
}

export default Team;