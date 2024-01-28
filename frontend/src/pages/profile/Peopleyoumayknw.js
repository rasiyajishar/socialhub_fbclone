import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import Addfriendsmallcard from "./Addfriendsmallcard";
import {stories} from "../../data/home"
function Peopleyoumayknw() {
  return (
    <div className="peopleyoumayknw">
      <div className="peopleyoumayknw_header">
        People you may know
        <div className="post_header_right ppl_circle">
          <HiDotsHorizontal />
        </div>
      </div>
      
      <div className="peopleymknow_list">
        {stories.map((item, i) => (
          <Addfriendsmallcard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Peopleyoumayknw;
