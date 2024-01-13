import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home"; 
import Register from "./pages/register";

import { useSelector } from "react-redux";
import CreatePostPopup from "./components/createPostPop";

function App() {
  //createpostvisible
  const[visible,setVisible] = useState(false)
  const {user} = useSelector((state)=>({...state}))
  return (
    <div>
     {visible && <CreatePostPopup user={user} setVisible={setVisible}/>}
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home setVisible={setVisible}/>} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </div>
  );
}

export default App;


