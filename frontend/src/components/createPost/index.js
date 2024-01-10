import React from 'react'
import "./style.css";
import { FaVideo } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { PiSmileyFill } from "react-icons/pi";
const CreatePost = ({ user }) => {
  return (
    <div className='CreatePost'>
      <div className='CreatePost_header'>
      <img src={user?.picture} alt=''/> 
       <div className='open_post hover 1'>whats on your mind ? {user?.first_name}</div>   
</div>

<div className='create_splitter'></div>

<div className='CreatePost_body'>
  <div className='CreatePost_icon hover 1'>
   <FaVideo color='red'/> 
 Video
</div>
  <div className='CreatePost_icon hover 1'>
  <MdInsertPhoto color='green'/>
Photo
</div>
  <div className='CreatePost_icon hover 1'>
    <PiSmileyFill color='yellow'/>
Activity
</div>


</div>
    </div>
  )
}

export default CreatePost