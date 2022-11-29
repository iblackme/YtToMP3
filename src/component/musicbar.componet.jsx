import music from "../songs/2002.mp3";
import "./musicbar.componet.css";
import AudioPlayer from "react-h5-audio-player";

export const MusicBar = () => {
  return (
    <div className="music-bar">
      <div className="play-pause">
        <AudioPlayer
          autoPlay
          src={music}
          // other props here
        />
      </div>
    </div>
  );
};
