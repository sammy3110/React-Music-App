import React, { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";
import { TiArrowShuffle, TiArrowRepeat, TiThList } from "react-icons/ti";

const MusicBottom = ({ current_song, playPauseButton, audioFile, sourceRef }) => {
  const [song_slider_value, setSong_slider_value] = useState(0);
  const [playing_song, setPlaying] = useState(false);

  setInterval(() => {
    if (audioFile.current?.paused) return;
    function getTimeCodeFromNum(num) {
      let seconds = parseInt(num);
      let minutes = parseInt(seconds / 60);
      seconds -= minutes * 60;
      const hours = parseInt(minutes / 60);
      minutes -= hours * 60;

      if (hours === 0)
        return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
      return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
      ).padStart(2, 0)}`;
    }

    const duration_p = document.getElementById("current_time");
    duration_p.textContent = getTimeCodeFromNum(audioFile.current?.currentTime);
    const x = audioFile.current?.currentTime;
    const y = audioFile.current?.duration;

    if (x & y) setSong_slider_value((x * 100) / y);
  }, 1000);

  const playPause = () => {
    if (!audioFile.current?.paused) {
      audioFile.current?.pause();
      setPlaying(false);
    } else {
      audioFile.current?.play();
      setPlaying(true);
    }
  };

  function audioLoaded() {
    playPauseButton.current.addEventListener("click", playPause, false);
  }

  function skipSong(e) {
    const time = parseInt(e.target.value);
    if (audioFile.current) {
      const x = audioFile.current.duration;
      audioFile.current.currentTime = (x * time) / 100;
    }
    setSong_slider_value(time);
  }

  return (
    <div onLoad={audioLoaded} className="music_bottom_container">
      <div className="flex_center music_bottom_left">
        <div className="music_bottom_song_image">
          <img src={current_song.imageUrl} alt={current_song.title} />
        </div>
        <div className="music_bottom_song_info">
          <h4>{current_song.title}</h4>
          <p>{current_song.artist}</p>
        </div>
      </div>

      <div className="flex_center music_bottom_middle">
        <audio ref={audioFile}>
          <source ref={sourceRef} src={current_song.source} type="audio/mp3" />
          Audio not supported on your browser. 😢
        </audio>
        <div className="flex_center music_bottom_play_icons">
          <BiSkipPrevious className="icons" size={30} />
          <div ref={playPauseButton}>
            {playing_song ? (
              <BsFillPauseCircleFill className="icons" size={45} />
            ) : (
              <BsFillPlayCircleFill className="icons" size={45} />
            )}
          </div>

          <BiSkipNext className="icons" size={30} />
        </div>
        <div className="music_bottom_play_progress">
          <p id="current_time">0:00</p>
          <input
            type="range"
            min="1"
            value={song_slider_value}
            onChange={skipSong}
            max="100"
            className="slider"
            id="myRange"
          ></input>
          <p>{current_song.duration}</p>
        </div>
      </div>
      <div className="flex_center music_bottom_right">
        <HiVolumeUp className="icons" size={20} />
        <TiArrowShuffle className="icons" size={20} />
        <TiArrowRepeat className="icons" size={20} />
        <TiThList className="icons" size={20} />
      </div>
    </div>
  );
};

export default MusicBottom;
