

// import React, { useState } from 'react';
// import { Header } from '../../components/header';
// import Lefthome from '../../components/home/left';
// import CreatePost from '../../components/createPost';
// import CreatePostPopup from '../../components/createPostPop';
// import { useSelector } from 'react-redux';

// const Home = ({ visible, setVisible, posts }) => {
//   const { user } = useSelector((state) => ({ user: state.user }));

//   return (
//     <div>
//       <Header />
//       <Lefthome user={user} />
//       <CreatePost user={user} setVisible={setVisible} />
//       {visible && <CreatePostPopup user={user} setVisible={setVisible} />}

//       {posts.length ? (
//         posts.map((post) => (
//           <div className='post' key={post._id}>
//             {post._id}
//           </div>
//         ))
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { Header } from '../../components/header';
import Lefthome from '../../components/home/left';
import CreatePost from '../../components/createPost';
import CreatePostPopup from '../../components/createPostPop';
import { useSelector } from 'react-redux';
import Post from "../../components/post"
const Home = ({ visible, setVisible, posts ,loading}) => {
  
  console.log("Posts before rendering:", posts);
  
  const { user } = useSelector((state) => ({ user: state.user }));

  return (
    <div>
      <Header />
      <Lefthome user={user} />
      <CreatePost user={user} setVisible={setVisible} />

      {loading ? (
  <div>Loading...</div>
) : (
  <div className='posts'>
    {posts.map((post) => (
      <Post key={post._id} post={post} user={user} />
    ))}
  </div>
)}


      {visible && <CreatePostPopup user={user} setVisible={setVisible} />}
    </div>
  );
};

export default Home;