import React from 'react'
import { MdInsertPhoto } from "react-icons/md";
import { PiSmileyFill } from "react-icons/pi";
import { FaVideo } from "react-icons/fa";
function Addtoyourpost({setShowPrev}) {
  return (
    <div className='addtoyourpost'>
     <div className='addto_text'>Add to your post</div>
     {/* <div className='postheader_right hover1' onClick={()=>{
      setShowPrev(true)
     }}><MdInsertPhoto color='green'/></div>    */}


<div className='postheader_right hover1' onClick={() => {
  console.log('Image icon clicked');
  setShowPrev(true);
}}>
  <MdInsertPhoto color='green' />
</div>

     <div className='postheader_right hover1'> <PiSmileyFill color='orange'/></div>   
     <div className='postheader_right hover1'><FaVideo color='red'/> </div>   
     <div className='postheader_right hover1'></div>   
    </div>
  )
}

export default Addtoyourpost