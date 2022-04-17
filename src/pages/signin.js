import {useState} from "react";
import useAuth from "../hook/useAuth";

const Signin = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {error, isPending, signup} = useAuth();

    const send = (e) =>{
        e.preventDefault();

        const obj = {
            email: email,
            password: password
        }

        signup(email, password)

    }

    return (
        <form onSubmit={send}>
            <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email"/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
            <button>Create acount</button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signin;