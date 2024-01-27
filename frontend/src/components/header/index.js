
// import React, { useState } from 'react';
// import './style.css';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { MdOutlineComputer } from 'react-icons/md';
// import { FaUserFriends } from 'react-icons/fa';
// import { IoMdHome } from 'react-icons/io';
// import { IoSearch } from "react-icons/io5";

// export const Header = () => {
//   const { user } = useSelector((state) => ({ ...state.user }));
//   const [searchValue, setSearchValue] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
    
//     // setSearchResults([`Result 1 for ${searchValue}`, `Result 2 for ${searchValue}`]);
//     setSearchResults([`${searchValue}`, `${searchValue}`]);
//   };

//   return (
//     <header className='header'>
//       <div className='header-left'>
//         <Link to="/" className='social-hub'>
//           socialHUB
//         </Link>
//         <div className='search'>
           
//           <input
//             type="text"
//             placeholder='Search socialhub...'
//             className='search-input'
            
//             value={searchValue}
            
//             onChange={(e) => setSearchValue(e.target.value)}
          
//           />
//           <IoSearch onClick={handleSearch}/>
         
//         </div>
//         {searchResults.length > 0 && (
//           <div className='search-results'>
//             {searchResults.map((result, index) => (
//               <div key={index}>{result}</div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className='header-center'>
//         <Link to="/" className='nav-link'>
//           <IoMdHome />
//         </Link>
//         <Link to="/friends" className='nav-link'>
//           <FaUserFriends />
//         </Link>
//         <Link to="/watch" className='nav-link'>
//           <MdOutlineComputer />
//           <div className='watchnotification'>9+</div>
//         </Link>
//       </div>
//       <div className='header-right'>
//         <Link to="/profile" className='profile-link'>
//           <img src={user?.picture} alt='' className='profile-picture' />
//           <span className='user-name'>{user?.first_name}</span>
//         </Link>
//       </div>
//     </header>
//   );
// };


import React, { useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineComputer } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import {  IoSearch } from 'react-icons/io5';
import { AiFillHome } from "react-icons/ai";
import { FaArrowAltCircleDown } from "react-icons/fa";

import Cookies from 'js-cookie';


import SearchResult from './searchresult'

export const Header = ({ page}) => {
  const { user } = useSelector((state) => ({ ...state.user }));
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dispatch= useDispatch();
  const navigate = useNavigate()



  const handleSearch = () => {
   
    setSearchResults([`${searchValue}`]);
  };


  const handleDropdownToggle = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  
  const handleLogout = () => {
    Cookies.set("user","")
   dispatch ({
    type:"LOGOUT",

   })
   navigate("/login")
  };
  
  const handleSetProfile = () => {
    navigate("/profile")
  };





  return (
    <header className='header'>
      <div className='header-left'>
        
        <Link to="/" className='social-hub' >
          socialHUB
        </Link>
        <div className='search'>
        <IoSearch onClick={handleSearch} />
          <input
            type="text"
            
            placeholder='Search socialhub...'
            className='search-input'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            
          />
       
        </div>
        {searchResults.length > 0 && <SearchResult results={searchResults} />}
      </div>
      <div className='header-center'>
        <Link to="/" className='nav-link'>
        <AiFillHome color='blue' />
        
        </Link>
        <Link to="/friends" className='nav-link'>
          <FaUserFriends />
        </Link>
        <Link to="/watch" className='nav-link'>
          <MdOutlineComputer />
          <div className='watchnotification'>9+</div>
        </Link>
      </div>
      <div className='header-right'>

      
        <Link to="/profile" className='profile-link'>
          <img src={user?.picture} alt='' className='profile-picture' />
          <span className='user-name'>{user?.first_name}</span>
        </Link>
        <div className='profile-dropdown' onClick={handleDropdownToggle}>
        <FaArrowAltCircleDown className='arrow_header'/>
        {isDropdownVisible && (
    <div className='dropdown-content'>
      <div onClick={handleSetProfile}>Set Profile</div>
      <div onClick={handleLogout}>Log Out</div>
    </div>
  )}
     </div> 
      </div>
    </header>
  );
};
