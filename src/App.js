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


const App = () =>{

  return (
    <BrowserRouter>

         <Navbar/>


    <Routes>
      <Route path="login" element={<Login/>}/>
       <Route path="signup" element={<Signin/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path="/echipe/:id" element={<TeamItSefl/>} />
       <Route path='/echipe' element={<Team/>}/>
       <Route path="/new-team" element={<AddNewTeam/>}/>

    </Routes>


    </BrowserRouter>

  )
}


export default App;
