import React ,{useRef, useState}  from 'react';
import { MdPublic } from "react-icons/md";
import './style.css';
import { IoMdClose } from "react-icons/io";
import Picker from "emoji-picker-react";
import { MdEmojiEmotions } from "react-icons/md";
import Addtoyourpost from './Addtoyourpost';
import ImagePreview from './ImagePreview';

function CreatePostPopup({ user }) {

const[text,setText] = useState("")
const[showprev,setShowPrev] = useState(false);
const[picker,setPicker] = useState(false);
const [images, setImages] = useState([]);
console.log(images)
const textRef=useRef(null)
const handleemoji=({emoji})=>{
const ref=textRef.current;
ref.focus();
const start=text.substring(0,ref.selectionStart);
const end=text.substring(ref.selectionStart);
const newtext=start + emoji + end;
setText(newtext);

};
  return (
    <div className='blur'>
      <div className='postbox'>
        <div className='box_header'>
          <div className='box_circle'>
          <IoMdClose />
          </div>
          <span>Create Post</span>
        </div>

        <div className='box_profile'>
         <img src={user?.picture} alt='' className='box_profileimg'/>
         <div className='box_col'>
          <div className='box_profile_name'>
            {user?.first_name}{user?.last_name}
          </div>
          <div className='box_privacy'
            ><MdPublic /> <span>Public</span></div>
         </div>

        </div>

        {!showprev && (
        <div className='flex_center'>
          <textarea 
          ref={textRef}
          maxLength="100" placeholder='post something....'
           value={text} className='post_input' onChange={(e)=>setText(e.target.value)
           }></textarea>
            
        </div>
        )}
        <div className='post_emojis_wrap'>
          {picker && (
            <div className='comment_emoji_picker_remove'>
            <Picker onEmojiClick={handleemoji}/>
          </div>
          )}
           <MdEmojiEmotions className='emoji_icon_large' onClick={()=>{setPicker((prev)=>!prev)}

          }/>

<ImagePreview images={images} setImages={setImages} setShowPrev={setShowPrev} />

        </div>
        <Addtoyourpost setShowPrev={setShowPrev} />
        <button className='post_submit'>Post</button>
      </div>
    </div>
  );
}

export default CreatePostPopup;
