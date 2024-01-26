import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Register from "./pages/register";

import { useSelector } from "react-redux";
import axios from "axios";
import CreatePostPopup from "./components/createPostPop";
import  {postsReducer} from "./functions/reducer";


function App() {
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: ""
  });


  const navigate = useNavigate(); 
  
  useEffect(() => {
    console.log("User Object:", user);
    if (user && user.token) {
      getAllPosts();
    }
  }, [user]);
  

  // useEffect(() => {
  //   if (!user || !user.token) {
  //     console.log("Redirecting to login");
  //     navigate("/login");
  //   } else {
  //     console.log("User authenticated, fetching posts");
  //     getAllPosts();
  //   }
  // }, [user, navigate]);
  

  const getAllPosts = async () => {
    try {
      dispatch({ type: "POST_REQUEST" });
      console.log("User:", user);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/post/getAllPosts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      console.log("API Response:", response);

      if (response && response.data) {
        dispatch({
          type: "POST_SUCCESS",
          payload: response.data
        });
      } else {
        console.log("Data not available");
        dispatch({
          type: "POST_ERROR",
          payload: "Data not available"
        });
      }
    } catch (error) {
      console.error("Error in API call:", error);
      console.error("Server response:", error.response);
      dispatch({
        type: "POST_ERROR",
        payload: error.response
          ? error.response.data.message || "Server error"
          : "Network error"
      });
    }
  };

  console.log(posts);

  return (
    <div>
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/profile/:username" element={<Profile />} exact />

        <Route
          path="/home"
          element={<Home setVisible={setVisible} posts={posts} />}
          exact
        />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </div>
  );
}

export default App;
