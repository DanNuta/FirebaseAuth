import {footbalAuth} from "../firebase/config";
import {useState, useEffect} from "react";
import {useContext} from "react";
import {Auth} from "../context/AuthContext";

const useAuth = () =>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const {setUser} = useContext(Auth);

    console.log(setUser)



       async function signup(email, password){
            setIsPending(true);

            try{
                const rez = await footbalAuth.createUserWithEmailAndPassword(email, password);
                console.log(rez.user)

                setUser(rez.user)

            }catch(e){
                setError(e.message)
                setIsPending(false)
            }
            setIsPending(false)
        }


   


    return {error, isPending, signup}

}

export default useAuth;