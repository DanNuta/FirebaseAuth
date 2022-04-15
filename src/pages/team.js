import {footbalFirestore} from "../firebase/config";
import {useEffect, useState}  from "react";
import useCollection from "../hook/useCollection";
import {Link} from "react-router-dom";



const Team = () =>{

    const {data, error, isPending} = useCollection("echipe_de_fotbal")

   
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