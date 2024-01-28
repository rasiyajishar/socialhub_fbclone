import React from 'react'
import { Link } from 'react-router-dom'

function Profilemenu() {
  return (
    <div className='Profilemenu_wrap'>
        <div className='profile_menu'>
            <Link to="/" className='profile_menu_active'>Posts</Link>
            <Link to="/" className='hoveri'>About</Link>
            <Link to="/" className='hoveri'>Friends</Link>
            <Link to="/" className='hoveri'>Photos</Link>
            <Link to="/" className='hoveri'>Videos</Link>
            <Link to="/" className='hoveri'>More</Link>
        </div>
    </div>
  )
}

export default Profilemenu