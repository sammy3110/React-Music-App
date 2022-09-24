import React from "react";
import SongTile from "./sub_components/SongTile";
import { BsPlayFill, BsShuffle } from "react-icons/bs";
import SongBarTile from "./sub_components/SongBarTile";

const MusicMainWindow = ({
  recommendedSongs,
  songList,
  posters,
}) => {
  return (
    <div className="flex_center music_main_window_container">
      <div className="music_main_window_top">
        <div className="music_main_title">
          <div>
            <p>Discover music</p>
            <h2>New Releases</h2>
          </div>
          <div className="main_icons">
            <div className="flex_center">
              {" "}
              <BsShuffle size={16} />{" "}
            </div>
            <div className="flex_center">
              {" "}
              <BsPlayFill size={25} />{" "}
            </div>
          </div>
        </div>

        <div className="music_main_content">
          <div className="main_content_album">
            <img src={posters.url} alt="1D album" />
          </div>
          <div className="main_content_songs">
            {songList.map((song) => {
              return (
                <div key={song.id}>
                  {" "}
                  <SongBarTile song={song} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="music_main_window_bottom">
        <h2>Recommended for you</h2>
        <div className="music_main_recommended_list">
          {recommendedSongs.map((song) => {
            return <SongTile key={song.id} song={song} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MusicMainWindow;
