import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {footbalFirestore} from "../firebase/config";
import "./TeamSelf.scss";

const TeamItSefl = () =>{

    const [data, setData] = useState("");
    const [isPending, setIsPending] = useState("");
    const [echipe, setEchipe] = useState(false);
    const [editEchipa, setEditEchipa] = useState(false);
    const [changeTeam, setChangeTeam] = useState("");



    const {id} = useParams();


    useEffect(() => {
        setIsPending(true)
        footbalFirestore.collection("echipe_de_fotbal").doc(id).onSnapshot(snapshot => {
            if(snapshot.exists){
                console.log(snapshot.data())
                setData(snapshot.data());
                setIsPending(false)
            }else{

            }
        })
    }, [])


     const change = () =>{
        setEchipe(!echipe);
        footbalFirestore.collection("echipe_de_fotbal").doc(id).update({
            echipa: changeTeam
        })

     }


   
    return (
        <div>
           {isPending && <p>Loading...</p>}
            <p>{data.jucatori && data.jucatori.map(item => (<li key={item}>{item}</li>))}</p>
            <p>{data && data.antrenor}</p>
           
            <div onMouseEnter={() => setEditEchipa(true)} onMouseLeave={() => setEditEchipa(false)} className="echipa">
                <p>{data && echipe ? <input onChange={(e) => setChangeTeam(e.target.value)} value={changeTeam} type="text"></input> : data.echipa}</p>
                {editEchipa && <i onClick={change} class="fa fa-car fa-lg"></i>}
            </div>
            
        </div>
    )
}

export default TeamItSefl;