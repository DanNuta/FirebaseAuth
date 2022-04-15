import {useState} from "react";
import {footbalFirestore} from "../firebase/config";
import useAddCollection from "../hook/useAddCollection";
import { useNavigate } from "react-router-dom";

const AddNewTeam = () =>{
    let navigate = useNavigate()

    const [echipa, setEchipa] = useState("");
    const [antrenor, setAntrenor] = useState("");
    const [curentJucator, setCurentJucator] = useState("");
    const [jucatori, setJucatori] = useState("");
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)

    


    const curentJucatorBtn = (e) =>{
        e.preventDefault()

        if(curentJucator.length == 0 || curentJucator == ""){

        }else{
            setJucatori([...jucatori, curentJucator ])
            setCurentJucator("")

           
        }
    }



    const submit = (e) =>{
        e.preventDefault();
        const obj = {
            echipa: echipa,
            antrenor: antrenor,
            jucatori: jucatori
        }

        
        setEchipa("")
        setAntrenor("")
        setJucatori("")

       
        try{
            if(obj.echipa == "" || obj.antrenor == "" || obj.jucatori == ""){

            }else{

                footbalFirestore.collection("echipe_de_fotbal").add(obj)
                setTimeout(() => {
                    navigate("/")
                }, 500);
            }
            
        }catch(e){
            setIsPending(false)
            setError(e.messege);
        }



        console.log(obj)
    }

    return (
        <form onSubmit={submit}>
            <input onChange={(e) => setEchipa(e.target.value)} value={echipa} type="text" placeholder="Echipa"/>
            <input onChange={(e) => setAntrenor(e.target.value)} type="text" value={antrenor} placeholder="Antrenor"/>
            <div>
                <input onChange={(e) => setCurentJucator(e.target.value)} type="text" value={curentJucator} placeholder="Jucatori" />
                <button onClick={curentJucatorBtn}>Add</button>
            </div>


            {!isPending &&  <button>Submit</button>}
            {isPending && <button>Loading...</button>}
        </form>
    )
}


export default AddNewTeam;