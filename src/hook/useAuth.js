import {footbalAuth} from "../firebase/config";
import {useState, useEffect} from "react";
import {useContext} from "react";
import {Auth} from "../context/AuthContext";

const useAuth = () =>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const {setUser} = useContext(Auth);

    



       async function signup(email, password){
           
           try{

                setError(null)
                setIsPending(true)
                const rez = await footbalAuth.createUserWithEmailAndPassword(email, password);
                console.log(rez.user.uid)
                setUser(rez.user)
                setIsPending(false)

            }catch(e){
                setError(e.message)
                setIsPending(false)
            }
            
            
        }


   


    return {error, isPending, signup}

}

export default useAuth;