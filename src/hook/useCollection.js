import {footbalFirestore} from "../firebase/config";
import {useState, useEffect, useRef} from "react";



function useCollection(collection, _query){

    const query = useRef(_query).current;

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    
    
    useEffect(() =>{

        let colection = footbalFirestore.collection(collection)

        if(query){
            colection =  colection.where(...query)
        }


        colection.onSnapshot(snapshot => {
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

    }, [collection, query])



    return {data, error, isPending}

}


export default useCollection;