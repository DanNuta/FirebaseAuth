import {useState} from "react";

const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const send = (e) =>{
        e.preventDefault();

        console.log(email, password);

    }

    return (
        <form onSubmit={send}>
            <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email"/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
            <button>Login</button>
        </form>
    )
}

export default Login;