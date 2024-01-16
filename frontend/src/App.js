import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Register from "./pages/register";

import { useSelector } from "react-redux";
import axios from "axios"; // Import axios

import CreatePostPopup from "./components/createPostPop";

function reDucer(state, action) {
  switch (action.type) {
    case "POST_REQUEST":
      return { ...state, loading: true, error: "" };
    case "POST_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ""
      };
    case "POST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

function App() {
  //createpostvisible
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [{ loading, error, posts }, dispatch] = useReducer(reDucer, {
    loading: false,
    posts: [],
    error: ""
  });

  useEffect(() => {
    getAllPosts();
  }, []);




  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POST_REQUEST"
      });
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/post/getAllPosts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );
  
      if (response && response.data) {
        dispatch({
          type: "POST_SUCCESS",
          payload: response.data
        });
      } else {
        dispatch({
          type: "POST_ERROR",
          payload: "Data not available"
        });
      }
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response ? error.response.data.message : "Network error"
      });
    }
  };
  console.log(posts);

 

  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home setVisible={setVisible} posts={posts} />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </div>
  );
}

export default App;
