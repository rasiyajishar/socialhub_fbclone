import React, { useRef, useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function CreateComment({ user }) {
  const [picker, setPicker] = useState(false);
  const [text, setText] = useState("");
  const[commentImage,setCommentImage]=useState("")
  const[error,setError]=useState("")
  const textRef = useRef(null);
  const imgInput = useRef(null)
  const handleemoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newtext = start + emoji + end;
    setText(newtext);
  };

  const handleimage=(e)=>{
    let file=e.target.files[0];
    if(file.type !== 'image/jpeg'&& file.type !=='image/png'&& file.type !=='image/webp'&& file.type !=='image/gif'){
    
       setError(`${file.name} format not supported`)
        return ;
    }else if(file.size > 1024 *1024 * 5){
      setError(`${file.name} is too large max 5mb allowed`);
      return;
    }



    const reader =new FileReader();
    reader.readAsDataURL(file)
    reader.onload=(event)=>{
setCommentImage(event.target.result)
   }
  }
  return (
    <div className="create_comments_wrap">
      <div className="create_comment">
        <img src={user?.picture} alt="" />
        <div className="comment_input_wrap">
          {picker && 
          
          <div className="comment_emoji_picker"><Picker onEmojiClick={handleemoji} /></div>
          
         }
          <input type="file" hidden ref={imgInput} accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleimage}
          />
          {error && (
            <div className="posterror comment_error">
            <div className="posterror">{error}</div>
            <button className="blue_btn" onClick={()=>setError("")}>Try again</button>
            </div>
          )}
          <input
            type="text"
            ref={textRef}
            value={text}
            placeholder="write a comment"
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="comment_circle_icon hover"
            onClick={() => {
              setPicker((prev) => !prev);
            }}
          >
            <BsEmojiSmile />
          </div>
          
          
          <div
            className="comment_circle_icon hover"
            onClick={() => imgInput.current.click()}
          >
            <CiCamera />
          </div>
          
          
          <div
            className="comment_circle_icon hover"
            onClick={() => {
              setPicker((prev) => !prev);
            }}
          >
            <BsEmojiSmile />
          </div>
        </div>
      </div>

      {commentImage && <div className="comment_image_prevw">
      <div className="exit_icon" onClick={()=>
      setCommentImage("")
      } ><IoMdClose /></div>
        <img src={commentImage} alt=""/>
       
      </div>
      }
    </div>
  );
}

export default CreateComment;
