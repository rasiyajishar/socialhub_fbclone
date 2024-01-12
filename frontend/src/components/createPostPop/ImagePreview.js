import React, { useRef ,useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { FaPhotoFilm } from "react-icons/fa6";


function ImagePreview({images,setImages,setShowPrev}) {
  const ImageInputRef = useRef(null);
  

  const handleImage = (e) => {
   let files=Array.from(e.target.files);
  // console.log(files)
  files.forEach((img)=>{
    const reader =new FileReader();
    reader.readAsDataURL(img);
    reader.onload=(readerEvent)=>{
      setImages((prevImages) => [...prevImages, readerEvent.target.result]);
    }
  })
  };

  return (
    <div className='add_pic_wrap'>
      <input type='file' multiple hidden ref={ImageInputRef} onChange={handleImage} />
      {images && images.length ? (
        <div className='add_pic_inside1 p0'>
          <div className='preview_actions'>
            <button className='hover1'>
              {/* <i className='edit_icon'></i> */}
              edit
            </button>
            <button className='hover1'>
            <FaPhotoFilm className='photo_icon' />
              Add photos/videos
            </button>
          </div>
          <div className='small_circle' onClick={()=>{
            setImages([]);
            setShowPrev(false)
          }}>
           
            <IoMdClose className='exit_icon'/>
          </div>
          <div className={images.length===1 ? "preview1"
           : images.length ===2 ? 'preview2'
           : images.length ===3 ? 'preview3'
           
          :"preview4"
        }>
            {
              images.map((img,i)=>(
                <img src = {img} key={i} alt='' />
              ))
            }
          </div>
        </div>
        ):(
        <div className='add_pic_inside'>
          <div className='small_circle' onClick={()=>{
            setShowPrev(false)
          }}>
            
            <IoMdClose className='exit_icon' />
            <div className='add_col' onClick={()=>{ImageInputRef.current.click()}}>
              <div className='add_circle'>
               
                <FaPhotoFilm className='photo_icon' />
              </div>
              <span>Add Photos/Videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;
