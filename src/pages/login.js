import {useState} from "react";
import useLogin from "../hook/useLogin";

const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {error, isPending, login} = useLogin();

    const send = (e) =>{
        e.preventDefault();

        login(email, password)
        setEmail("")
        setPassword("")

    }

    return (
        <form onSubmit={send}>
            <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email" value={email}/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password}/>
            {isPending ? <button>Loading...</button> : <button>Login</button>}

        </form>
    )
}

export default Login;