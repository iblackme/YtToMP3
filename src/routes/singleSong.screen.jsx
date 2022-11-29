import { MusicBar } from "../component/musicbar.componet";
export const SingleSongScreen = () => {
  return (
    <div className="core">
      <div className="main">
        <div className="nav-bar">
          <div className="gg-arrow-left"></div>
          <div className="now-playing">NOW PLAYING</div>
          <div className="gg-more-vertical-alt"> </div>
        </div>

        <div className="music-photo-main">
          <div className="music-photo"></div>
        </div>
        <div className="music-info">
          <div className="music-title">
            <h1> Annie Mare</h1>
          </div>
        </div>
        <div className="music-dital">
          <div className="gg-heart"></div>
          <div className="music-disctiption">
            <p> 2002 </p>
          </div>
          <div className="gg-software-upload"></div>
        </div>

        <MusicBar />
      </div>
    </div>
  );
};
