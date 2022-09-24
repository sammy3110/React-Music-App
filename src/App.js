import "./App.css";
import { useRef } from "react";
import MusicBottom from "./components/MusicBottom";
import MusicMainWindow from "./components/MusicMainWindow";
import MusicSidebar from "./components/MusicSidebar";

function App() {
    const recommendedSongs = [
    {
      id: "1",
      imageUrl: "thumbs/American Teen.webp",
      songName: "American Teen",
      artist: "Khalid",
    },
    {
      id: "2",
      imageUrl: "thumbs/Memories.webp",
      songName: "Memories",
      artist: "Maroon 5",
    },
    {
      id: "3",
      imageUrl: "thumbs/Shape Of You.webp",
      songName: "Shape Of You",
      artist: "Ed Sheren",
    },
    {
      id: "4",
      imageUrl: "thumbs/Girls like you.webp",
      songName: "Girls Like You",
      artist: "Maroon 5",
    },
    
  ]
    const songList = [
    {
      id: "1",
      imageUrl: "thumbs/As it was.png",
      artist: "Harry Styles",
      title: "As It Was",
      duration: "2:45",
      added: false,
      source: "songs/As_It_Was.mp3",
    },
    {
      id: "2",
      imageUrl: "thumbs/Say you won't let go.webp",
      artist: "James Arthur",
      title: "Say You Won't Let Go",
      duration: "3:30",
      added: true,
    },
    {
      id: "3",
      imageUrl: "thumbs/Night Changes.webp",
      artist: "One Direction",
      title: "Night Changes",
      duration: "4:00",
      added: false,
    },
    {
      id: "4",
      imageUrl: "thumbs/Watermelon Sugar.webp",
      artist: "Harry Styles",
      title: "Watermelon Sugar",
      duration: "3:08",
      added: false,
    },
  ]

    const posters = {
      id: "3",
      url: "images/poster3.jpg",
    };
  // );

    const current_song = songList[0]

  const playPauseButton = useRef();
  const audioFile = useRef();
  const sourceRef = useRef();



  return (
    <div className="flex_center App">
      <div className="flex_center music_top_container">
        <MusicSidebar />
        <MusicMainWindow
          posters={posters}
          songList={songList}
          recommendedSongs={recommendedSongs}
          playPauseButton={playPauseButton}
          audioFile={audioFile}
        />
      </div>
      <MusicBottom current_song={current_song} playPauseButton={playPauseButton}  audioFile={audioFile} sourceRef={sourceRef}/>
    </div>
  );
}

export default App;
