// import React from 'react'
// import { FaUserFriends } from "react-icons/fa";
// function Leftlink({img,text,notification}) {
//   return (
//     <div className='left_link'>
        
     
//     <FaUserFriends color='blue'/> <div className='col_1'>Find friends </div> 
//         <div className='col_2'></div>
//     <FaUserFriends color='blue'/> <div className='col_1'>Watch  </div> 
//         <div className='col_2'>5</div>
//     <FaUserFriends color='blue'/> <div className='col_1'>Pages  </div> 
//         <div className='col_2'>5</div>
//     <FaUserFriends color='blue'/> <div className='col_1'>Groups </div> 
//         <div className='col_2'>5</div>
        
        
//         </div>
//   )
// }

// export default Leftlink


import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from "react-icons/md";
import { MdComputer } from "react-icons/md";

function Leftlink({ img, text, notification }) {
  return (
    <>
    <div className='left_link'>
      <div className='icon'>
        <FaUserFriends color='blue' />
      </div>
      <div className='col_1'>friends</div>
      <div className='col_2'>{notification}</div>
    </div>
    <div className='left_link'>
      <div className='icon'>
        <MdGroups color='blue' />
      </div>
      <div className='col_1'>groups</div>
      <div className='col_2'>3</div>
    </div>
    <div className='left_link'>
      <div className='icon'>
        <MdComputer color='blue' />
      </div>
      <div className='col_1'>Watch</div>
      <div className='col_2'>5videos</div>
    </div>
    </>
  );
}

export default Leftlink;
