import React from "react";

const reactArray = [
  {
    name: "Like",
    image: "E:/socialHub_fbclone/frontend/src/Images/likeee.jpg",
  },
  {
    name: "happy",
    image: "E:/socialHub_fbclone/frontend/src/Images/happy.jpg",
  },
  {
    name: "sad",
    image: "E:/socialHub_fbclone/frontend/src/Images/sad.jpg",
  },
  {
    name: "wow",
    image: "E:/socialHub_fbclone/frontend/src/Images/wow1.jpg",
  },
];

export default function Reactpopup({ visible ,setVisible}) {
  return (
    <>
      {visible && (
        <div className="reactpopup"
        onMouseOver={()=>{
          setTimeout(()=>{
           setVisible(true);
          },500)
           }}
           onMouseLeave={()=>{
             setTimeout(()=>{
               setVisible(false);
              },500)
           }}
        >
          {reactArray.map((react, i) => (
            <div className="react" key={i}>
              <img src={react.image} alt={react.name} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
