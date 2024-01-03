import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home"; 
import Register from "./pages/register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </div>
  );
}

export default App;


