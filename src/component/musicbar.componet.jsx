import music from "https://jesusful.com/wp-content/uploads/music/2022/08/Anne_Marie_-_2002_(Jesusful.com).mp3";
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
