import React ,{useState}  from 'react';
import { MdPublic } from "react-icons/md";
import './style.css';
import { IoMdClose } from "react-icons/io";
function CreatePostPopup({ user }) {

const[text,setText] = useState("")
const[showprev,setShowprev] = useState(false);

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
          <textarea maxLength="100" placeholder='post something....'
           value={text} className='post_input' onChange={(e)=>setText(e.target.value)
           }></textarea>
            
        </div>
        )}
        <div className='post_emojis_wrap'>
          <div className='comment_emoji_picker_remove'></div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostPopup;
