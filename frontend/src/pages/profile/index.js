import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useReducer } from 'react';
import { profileReducer } from '../../functions/reducer';
import axios from 'axios';
const Profile = () => {
const{username}=useParams();

// const { user } = useSelector((state)=({ ...state }))
// var userName = username === undefined ? user.username:username;



const user = useSelector((state) => state); 
const userName  = username === undefined ? user?.username : username; 

const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
  loading: false,
  profile: {},
  error: ""
});
useEffect(()=>{
  if(userName){
getProfile();
}
},[userName]);

const getProfile= async()=>{
  try {
    dispatch({ type: "PROFILE_REQUEST" });
    console.log("User:", user);
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    );

    console.log("API Response:", response);

    if (response && response.data) {
      dispatch({
        type: "PROFILE_SUCCESS",
        payload: response.data
      });
    } else {
      console.log("Data not available");
      dispatch({
        type: "PROFILE_ERROR",
        payload: "Data not available"
      });
    }
  } catch (error) {
    console.error("Error in API call:", error);
    console.error("Server response:", error.response);
    dispatch({
      type: "PROFILE_ERROR",
      payload: error.response
        ? error.response.data.message || "Server error"
        : "Network error"
    });
  }
}




  return (
    <div>Profile</div>
  )
}

export default Profile


// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const Profile = () => {
//   const { username } = useParams();
//   const user = useSelector((state) => state); 
//   const displayedUsername = username === undefined ? user?.username : username; 

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Username: {displayedUsername}</p>
//     </div>
//   );
// };

// export default Profile;
