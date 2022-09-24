import React from "react";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { MdHeadphones, MdSmartDisplay, MdDownload } from "react-icons/md";
import { FaUserFriends, FaHeart } from "react-icons/fa";
import { TbMicrophone2 } from "react-icons/tb";

const MusicSidebar = () => {
  const bars = [
    4, 5, 4, 3, 5, 7, 7.5, 6, 3, 2, 5, 5, 2, 7, 3, 5, 1.5, 6, 4, 5, 6, 3, 1.5, 5, 4];
  const bars_obj = [];

  for (let i = 0; i < bars.length; i++) {
    bars_obj.push({
      id: i,
      length: bars[i],
    });
  }

  return (
    <div className="flex_center music_sidebar_container">
      <div className="flex_center music_sidebar_top">
        <div className="circle"></div>
      </div>
      <div className="music_sidebar_main">
        <ul>
          <div className="music_sidebar_title">Recommended</div>
          <li className="li_active">
            {" "}
            <IoMusicalNotesSharp
              size={20}
              className="music_sidebar_icon"
            />{" "}
            Discover music
          </li>
          <li>
            {" "}
            <MdHeadphones size={20} className="music_sidebar_icon" /> Private
            Radio
          </li>
          <li>
            {" "}
            <MdSmartDisplay className="music_sidebar_icon" size={20} /> MV
          </li>
          <li>
            {" "}
            <FaUserFriends className="music_sidebar_icon" size={20} /> Friends
          </li>
          <div className="music_sidebar_title">My music</div>
          <li>
            {" "}
            <MdDownload className="music_sidebar_icon" size={20} /> Downloads
          </li>
          <li>
            {" "}
            <TbMicrophone2 className="music_sidebar_icon" size={20} /> Singer
          </li>
          <div className="music_sidebar_title">Song list</div>
          <li>
            {" "}
            <FaHeart className="music_sidebar_icon" size={18} /> My favorite
            music
          </li>
        </ul>
      </div>
      <div className="music_sidebar_bottom">
        {bars_obj.map((length) => {
          return (
            <div
              key={length.id}
              className="bar"
              style={{ height: length.length - 0.8 + "rem" }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default MusicSidebar;
