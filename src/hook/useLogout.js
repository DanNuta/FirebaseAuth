import {useState, useContext} from "react";
import {footbalAuth} from "../firebase/config";
import {Auth} from "../context/AuthContext";



const useLogout = () =>{

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const {setUser} = useContext(Auth)

    

    async function logout(){

        try{
            setIsPending(true)
            await footbalAuth.signOut();

            setUser(null)

           setIsPending(false)

        }catch(e){
            setError(e.message)
            setIsPending(false)

        }

    }

    return {error, isPending, logout}
}

export default useLogout;