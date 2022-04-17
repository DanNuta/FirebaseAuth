import {footbalAuth} from "../firebase/config";
import {useState, useEffect} from "react";

const useAuth = () =>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);


       async function signup(email, password){
            setIsPending(true);

            try{
                const rez = await footbalAuth.createUserWithEmailAndPassword(email, password);
                console.log(rez.user)

            }catch(e){
                setError(e.message)
                setIsPending(false)
            }
            setIsPending(false)
        }


   


    return {error, isPending, signup}

}

export default useAuth;