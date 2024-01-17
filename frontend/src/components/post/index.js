import React  from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Moment from "react-moment";
import { MdOutlinePublic } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

function Post({ post }) {
  console.log("Post Data:", post);
  return (
    <div className="post">
      <div className="post_header">
        <Link
          to={`/profile/${post.user.username}`}
          className="post_header_left"
        >
          <img src={post.user.picture} alt="" />
          <div className="header_col">
            <div className="post_pofile_name">
              {post.user.first_name} {post.user.last_name}
              <div className="updated_p">
                {post.type == "profilePicture" &&
                  `updated ${
                    post.user.gender === "male" ? "his" : "her"
                  }profile Picture`}
                {post.type == "cover" &&
                  `updated ${
                    post.user.gender === "male" ? "his" : "her"
                  }cover Picture`}
              </div>
            </div>

            <div className="post_profile_date">
            <MdOutlinePublic />
              <Moment fromNow inteval={30}>{post.createdAt}</Moment>
              
            </div>
          </div>
        </Link>
        <div className="post_header_right hover1">
        <BsThreeDots />
        </div>
      </div>
<div className="post_text">{post.text}</div>
{post.images && post.images.length && <div>
  {
    post.images.map((image,i)=>(
      <img src={image} key={i} alt="" />
    ))
  }
  
  </div>}

    </div>
  );
}

export default Post;
