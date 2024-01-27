import React from 'react'
import { FaCamera } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";

function Cover({cover,showcovermenu, setShowCovermenu}) {
  return (
    <div className="profilecover">
    {cover && (
      <img src={cover} className="cover" alt="" />
    )}
    <div className="updatecover_wrapper">
      <div
        className="opencover_update"
        onClick={() => setShowCovermenu((prev) => !prev)}
      >
        <FaCamera />
        Add Cover Photo
      </div>
      {showcovermenu && (
        <div className="opencover_menu">
          <div className="opencovermenu_item">
            <MdInsertPhoto />
            Select Photo
          </div>
          <div className="opencovermenu_item">
            <FaFileUpload />
            Upload Photo
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default Cover