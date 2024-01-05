import React from 'react'
import './style.css'
import Leftlink from './leftlink'
function Lefthome({user}) {
  return (
    <div className='left_home'>
        <div className='left_link'>
            <img src={user?.picture} alt=''/>
        <span>{user?.first_name} {user?.last_name}</span>
        </div>
        <Leftlink />
    </div>
  )
}

export default Lefthome