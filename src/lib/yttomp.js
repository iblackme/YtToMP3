import { YoutubeMp3Downloader } from "youtube-mp3-downloader";

export const YD = new YoutubeMp3Downloader({
  ffmpegPath: "/home/pro/Development/React.js/Projects/music_player/src/songs", // FFmpeg binary location
  outputPath: "./", // Output file location (default: the home directory)
  youtubeVideoQuality: "highestaudio", // Desired video quality (default: highestaudio)
  queueParallelism: 2, // Download parallelism (default: 1)
  progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
  allowWebm: false, // Enable download from WebM sources (default: false)
});
