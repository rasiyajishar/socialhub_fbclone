import React from 'react'

function Addfriendsmallcard({item}) {
  return (
    <div className='Addfriendcard'>
     <div className='addfriend_imgsmall'>
        <img src= {item.profile_picture} alt='img' />
        <div className='addfriend_infos'>

<div className='addfriend_name'>{item.profile_name}</div>
<div className='light_blur_btn'>
    Add friend
</div>
        </div>
        </div>   
    </div>
  )
}

export default Addfriendsmallcard