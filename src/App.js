import {footbalFirestore, footbalAuth} from "../src/firebase/config";
import {useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../src/pages/home";
import Team from "../src/pages/team";
import Navbar from "./components/Navbar";
import AddNewTeam from "./pages/AddNewTeam";
import TeamItSefl from "./pages/TeamItSelf";
import Signin from "./pages/signin";
import Login from "./pages/login";
import { useContext } from "react";
import {Auth} from "../src/context/AuthContext";
import { Navigate } from "react-router-dom";


const App = () =>{

  const {authIsReady, user} = useContext(Auth);

  return (
    
    <div>
      {authIsReady && <BrowserRouter>

            <Navbar/>


            <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signin/>}/>
            <Route path="/" element={user ? <Home/> : <Navigate to="/signup"/>}/>
            
            
            <Route path="/echipe/:id" element={user ? <TeamItSefl/> : <Navigate to="/signup"/>} />
            <Route path='/echipe' element={user ? <Team/> : <Navigate to="/signup"/>}/>
            <Route path="/new-team" element={user ? <AddNewTeam/> : <Navigate to="/signup"/>}/>

            </Routes>


              </BrowserRouter>}
    </div>

  )
}


export default App;
