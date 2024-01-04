import React from 'react';
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { MdOutlineComputer } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
export const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <header className='header'>
      <div className='header-left'>
        <Link to="/" className='social-hub'>socialHUB</Link>
        <div className='search'>
          <input type="text" placeholder='Search...' className='search-input' />
        </div>
      </div>

      <div className='header-center'>
        <Link to="/" className='nav-link'><IoMdHome /></Link>
        <Link to="/friends" className='nav-link'><FaUserFriends /></Link>
        <Link to="/watch" className='nav-link'><MdOutlineComputer />
        <div className='watchnotification'>9+</div>
        </Link>
      </div>

      <div className='header-right'>
        <Link to="/profile" className='profile-link'>
          <img src={user?.picture} alt='' className='profile-picture' />
          <span className='user-name'>{user?.first_name}</span>
        </Link>
      </div>
    </header>
  );
};
