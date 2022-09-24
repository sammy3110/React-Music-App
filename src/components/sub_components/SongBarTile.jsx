import React from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

const SongBarTile = ({ song }) => {
  return (
    <div className="song_bar_tile_container">
      <div className="song_bar_tile_div1">
        <div>
          <img src={song.imageUrl} alt={song.title} />
        </div>
        <div>
          <h4>{song.title}</h4>
          <p>{song.artist}</p>
        </div>
      </div>

      <div className="song_bar_tile_div2">
        <p>{song.duration}</p>
        <p> {song.added ? <IoMdRemoveCircleOutline/> : <AiOutlinePlus/> }  </p>
      </div>
    </div>
  );
};

export default SongBarTile;
