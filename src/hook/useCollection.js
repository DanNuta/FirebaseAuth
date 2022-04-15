import {footbalFirestore} from "../firebase/config";
import {useState, useEffect} from "react";



function useCollection(collection){

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    
    
    useEffect(() =>{
        footbalFirestore.collection(collection).onSnapshot(snapshot => {
            if(snapshot.empty){
                setError("Acesta colectie nu contine date")
            }else{
                let rez = [];

                snapshot.docs.map(item => {
                    rez.push({id: item.id, ...item.data()})
                })

                setData(rez)

                
            }
        })

    }, [])



    return {data, error, isPending}

}


export default useCollection;