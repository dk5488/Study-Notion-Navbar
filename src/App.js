import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import { useState } from 'react'

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
   <div>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      
    </Routes>
   </div>

  );
}

export default App;

