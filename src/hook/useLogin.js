import {useState, useContext} from "react";
import {footbalAuth} from "../firebase/config";
import {Auth} from "../context/AuthContext";

const useLogin = () =>{

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)

    const {setUser} = useContext(Auth);

    async function login(email, password){

        try{
            setIsPending(true)

          const rez = await footbalAuth.signInWithEmailAndPassword(email, password);

          setUser(rez.user)



            setIsPending(false)

        }catch(e){
            setError(e.message)

        }

    }

    return {error, isPending, login}
}

export default useLogin;