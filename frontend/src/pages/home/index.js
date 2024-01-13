import React, { useState } from 'react';
import { Header } from '../../components/header';
import Lefthome from '../../components/home/left';
import CreatePost from '../../components/createPost';
import CreatePostPopup from '../../components/createPostPop';
import { useSelector } from 'react-redux';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <div>
      <Header />
      <Lefthome user={user} />
      <CreatePost user={user} setVisible={setVisible} />
      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
    </div>
  );
};

export default Home;
