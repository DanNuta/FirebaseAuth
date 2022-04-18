import {useState} from "react";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Signin = () =>{

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {error, isPending, signup} = useAuth();

    const send = (e) =>{
        e.preventDefault();

        setEmail("")
        setPassword("")

        signup(email, password)
        navigate("/")

    }

    return (
        <form onSubmit={send}>
            <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email" value={email}/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password}/>
            {isPending ? <button>Loading...</button> : <button>Create acount</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signin;