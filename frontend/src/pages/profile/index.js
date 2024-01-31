import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useReducer } from "react";
import "./style.css";
import { profileReducer } from "../../functions/reducer";
import { Header } from "../../components/header";
import axios from "axios";
import Cover from "./Cover"
import Profilepictureinfos from "./Profilepictureinfos";
import Profilemenu from "./Profilemenu";
import Peopleyoumayknw from "./Peopleyoumayknw";
const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
 
  const { user } = useSelector((state)=>({ ...state }))
  var userName = username === undefined ? user.username:username;

  // const user = useSelector((state) => state);
  // const userName = username === undefined ? user?.username : username;

  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });
  useEffect(() => {
    if (userName) {
      getProfile();
    }
  }, [userName]);

  const getProfile = async () => {
    try {
      dispatch({ type: "PROFILE_REQUEST" });
      console.log("User:", user);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user/getProfile/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("API Response:", response);

      if (response.ok === false) {
        navigate("/profile");
      } else {
      }

      if (response && response.data) {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: response.data,
        });
      } else {
        console.log("Data not available");
        dispatch({
          type: "PROFILE_ERROR",
          payload: "Data not available",
        });
      }
    } catch (error) {
      console.error("Error in API call:", error);
      console.error("Server response:", error.response);
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response
          ? error.response.data.message || "Server error"
          : "Network error",
      });
    }
  };

  return (
    <div className="profile">
      <Header />
      <div className="profiletop">
        <div className="profilecontainer">
         <Cover 
         cover ={profile.cover}
        
         />
         <Profilepictureinfos profile={profile}/>
         <Profilemenu />
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_container">
          
        </div>
        <div className="bottom_container">
            <Peopleyoumayknw />
          </div>
      </div>
    </div>
  );
};

export default Profile;
