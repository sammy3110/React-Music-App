import React from "react";

const SongTile = ({ song }) => {
  return (
    <div className="song_tile_container">
      <img src={song.imageUrl} alt={song.songName} />
      <h4>{song.songName}</h4>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongTile;
