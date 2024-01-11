import React from 'react';
import { Header } from '../../components/header';
import Lefthome from '../../components/home/left';
import CreatePost from '../../components/createPost'
import { useSelector } from 'react-redux';
import CreatePostPopup from '../../components/createPostPop';
const Home = () => {
  const {user} = useSelector((user)=>({...user}))
  return (
    <div>
      <Header />
      <Lefthome user={user}/>
      <CreatePost user={user} />
      <CreatePostPopup user={user}/>
    </div>
  )
}

export default Home