import { FaCamera } from "react-icons/fa";

function Profilepictureinfos({ profile }) {
  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
        <div
          className="profile_w_bg"
          style={{
            backgroundSize: "cover",
             backgroundImage:`url(${profile.picture})`,
         
          }}
        ></div>
        <div className="profile_circle">
        <FaCamera />
        </div>
        </div>
        <div className="profile_w_col">
          <div className="profile_name">
            {profile.first_name}{profile.last_name}
            <div className="Other name"></div>
          </div>
          <div className="profile_friend_count"></div>
          <div className="profile_friend_imgs"></div>
        </div>
      </div>
    </div>
  );
}

export default Profilepictureinfos;
