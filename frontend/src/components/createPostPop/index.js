import React, { useRef, useState } from 'react';
import { MdPublic } from 'react-icons/md';
import './style.css';
import { IoMdClose } from 'react-icons/io';
import Picker from 'emoji-picker-react';
import { MdEmojiEmotions } from 'react-icons/md';
import Addtoyourpost from './Addtoyourpost';
import ImagePreview from './ImagePreview';
import { createPost } from '../../functions/post';
import  PulseLoader from "react-spinners/PulseLoader"
import { uploadImages } from '../../functions/uploadImages';

function CreatePostPopup({ user, setVisible,updatePosts }) {
  const popup=useRef(null)
  const [text, setText] = useState('');
  const [showprev, setShowPrev] = useState(false);
  const [picker, setPicker] = useState(false);
  const [images, setImages] = useState([]);
  const[error,setError] = useState("")
 const[loading,setLoading] = useState(false)
  console.log(images);
  const textRef = useRef(null);

  const handleemoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newtext = start + emoji + end;
    setText(newtext);
  };

  const handleClose = () => {
   
    setVisible(false);
  };




// const postSubmit = async () => {
//   setLoading(true);

//   let res;

//   if (user && user.id) {
//     try {
//       console.log("Token:", user.token);


//       console.log('Request Payload:', { type: null, text, images, user: user.id });
//       res = await createPost(null, text, images, user.id, user.token);


//       console.log('API Response:', res); 

//       if (!res) {
//         console.error("createPost response is undefined");
//       }
//     } catch (error) {
//       console.error("Error in postSubmit:", error);
//     }
//   } else {
//     console.error("User or user.id is undefined");
//   }

//   setLoading(false);

//   if (res === "ok") {
//    updatePosts();
//      setVisible(false);
     
//   } else {
//     setError(res);

//     if (images && images.length) {
//       setLoading(true);
//       const path = `${user.username}/postImages`;
//       let formData = new FormData();

      
//       images.forEach((image) => {
//         formData.append("file", image);
//       });

//       formData.append("path", path);

//       try {
//         const response = await uploadImages(formData, path, user.token);
//         // Assuming that response contains the image URLs
//         const imageUrls = response.map((image) => image.url);

//         await createPost(null, text, imageUrls, user.id, user.token);
//         setLoading(false);
//         setText();
        
//         setImages([]);
//         setVisible(false);
       
//         console.log(response);
//       } catch (uploadError) {
//         console.error("Error uploading images:", uploadError);
//         setLoading(false);
       
//       }
//     } else if (text) {
//       setLoading(true);

//       const response = await createPost(null, text, null, user.id, user.token);

//       setLoading(false);

//       if (response === "ok") {
//         setText("");
//         updatePosts();
//         setVisible(false);
//       } else {
//         setError(response);
//       }

//       console.log("Text exists");
//     } else {
//       console.log("Nothing");
//     }
//   }
// };

const postSubmit = async () => {
  setLoading(true);

  try {
    const res = await createPost(null, text, images, user.id, user.token);

    console.log('API Response:', res);

    if (res === 'ok') {
      // Call the updatePosts function passed from App.js to update the list of posts
      updatePosts();
      setVisible(false);
    } else {
      setError(res);
    }
  } catch (error) {
    console.error('Error in postSubmit:', error);
    setError('Error occurred while creating the post');
  }

  setLoading(false);
};

  
  return (
    <div className="blur">
      
      <div className="postbox" ref={popup}>
        <div className="box_header">
        <div className="box_circle" onClick={handleClose}>
            <IoMdClose />
          </div>
          <span>Create Post</span>
        </div>

        <div className="box_profile">
          <img src={user?.picture} alt="" className="box_profileimg" />
          <div className="box_col">
            <div className="box_profile_name">
              {user?.first_name}
              {user?.last_name}
            </div>
            <div className="box_privacy">
              <MdPublic /> <span>Public</span>
            </div>
          </div>
        </div>

        {!showprev && (
          <div className="flex_center">
            <textarea
              ref={textRef}
              maxLength="100"
              placeholder="post something...."
              value={text}
              className="post_input"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        )}
        <div className="post_emojis_wrap">
          {picker && (
            <div className="comment_emoji_picker_remove">
              <Picker onEmojiClick={handleemoji} />
            </div>
          )}
          <MdEmojiEmotions
            className="emoji_icon_large"
            onClick={() => {
              setPicker((prev) => !prev);
            }}
          />

          <ImagePreview images={images} setImages={setImages} setShowPrev={setShowPrev} />
        </div>
        <Addtoyourpost setShowPrev={setShowPrev} />
        <button className="post_submit" onClick={()=>{
 postSubmit()
        }
         
        }
        disabled={loading}
        >
        {loading ? <PulseLoader color='#fff' size={5}/> :"Post"}
        
        
        
        </button>
      </div>
    </div>
  );
}

export default CreatePostPopup;
