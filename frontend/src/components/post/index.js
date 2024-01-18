import React ,{useState}from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Moment from "react-moment";
import { MdOutlinePublic } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import Reactpopup from "./reactpop";
import CreateComment from "./CreateComment";

function Post({ post,user }) {
  const [visible,setVisible]=useState(false)
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
              <Moment fromNow inteval={30}>
                {post.createdAt}
              </Moment>
            </div>
          </div>
        </Link>
        <div className="post_header_right hover1">
          <BsThreeDots />
        </div>
      </div>
      <div className="post_text">{post.text}</div>
      {post.images && post.images.length && (
        <div>
          {post.images.map((image, i) => (
            <img src={image} key={i} alt="" className="imagediv" />
          ))}
        </div>
      )}

      <div className="post_infos">
        <div className="react_count_imgs">
          <div>
            <div className="react_count_num"></div>
          </div>
          <div className="toroght">
            <div className="comment_count">14comment</div>
            <div className="share_count">2 share</div>
          </div>
        </div>
      </div>
      <div className="post_actions">
        <Reactpopup visible={visible} setVisible={setVisible}/>
        <div className="post_action " onMouseOver={()=>{
         setTimeout(()=>{
          setVisible(true);
         },500)
          }}
          onMouseLeave={()=>{
            setTimeout(()=>{
              setVisible(false);
             },500)
          }}
          >
        <AiFillLike />
        <span>Like</span>
        </div>
        <div className="post_action">
        <FaCommentAlt />
        <span>Comment</span>
        </div>
        <div className="post_action">
        <FaShare />
        <span>Share</span>
        </div>
      </div>

      <div className="comments_wrap">
        <div className="comments_order"></div>
        <CreateComment user ={user} />
      </div>
    </div>
  );
}

export default Post;
