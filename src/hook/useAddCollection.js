import {useState, useEffect} from "react";
import {footbalFirestore} from "../firebase/config";

function useAddCollection(){
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    async function addElement(collection, doc){
        setIsPending(true)
        

        try{
            footbalFirestore.collection(collection).add(doc);
            setIsPending(false)  
        }catch(e){
            setIsPending(false)
            setError(e.messege)

        }

    }

    addElement();

    return {error, isPending, addElement}

}

export default useAddCollection;

