// import React ,{useState}from "react";
// import "./style.css";
// import { FaVideo } from "react-icons/fa";
// import { MdInsertPhoto } from "react-icons/md";
// import { PiSmileyFill } from "react-icons/pi";
// import CreatePostPopup from "../createPostPop"
// const CreatePost = ({ user,visible,setVisible }) => {
//   // const [visible, setVisible] = useState(false);
//   return (
//     <div className="CreatePost">
//       <div className="CreatePost_header">
//         <img src={user?.picture} alt="" />
//         <div className="open_post hover 1" onClick={()=>{
//           setVisible(true)
//         }}>
//           whats on your mind ? {user?.first_name}
//         </div>
//       </div>

//       <div className="create_splitter"></div>

//       <div className="CreatePost_body">
//         <div className="CreatePost_icon hover 1">
//           <FaVideo color="red" />
//           Video
//         </div>
//         <div className="CreatePost_icon hover 1">
//           <MdInsertPhoto color="green" />
//           Photo
//         </div>
//         <div className="CreatePost_icon hover 1">
//           <PiSmileyFill color="yellow" />
//           Activity
//         </div>
//       </div>
   
//  {/* <button onClick={() => setVisible(true)}>Post your Ideas</button> */}
// {visible && <CreatePostPopup user={user} setVisible={setVisible} />} 
//     </div>
//   );
// };

// export default CreatePost;


import React, { useState } from "react";
import "./style.css";
import { FaVideo } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { PiSmileyFill } from "react-icons/pi";
import CreatePostPopup from "../createPostPop";

const CreatePost = ({ user, visible, setVisible }) => {
  return (
    <div className="CreatePost">
      <div className="CreatePost_header">
        <img src={user?.picture} alt="" />
        <div className="open_post hover 1" onClick={() => setVisible(true)}>
          whats on your mind ? {user?.first_name}
        </div>
      </div>

      <div className="create_splitter"></div>

      <div className="CreatePost_body">
        <div className="CreatePost_icon hover 1">
          <FaVideo color="red" />
          Video
        </div>
        <div className="CreatePost_icon hover 1">
          <MdInsertPhoto color="green" />
          Photo
        </div>
        <div className="CreatePost_icon hover 1">
          <PiSmileyFill color="yellow" />
          Activity
        </div>
      </div>

      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
    </div>
  );
};

export default CreatePost;
