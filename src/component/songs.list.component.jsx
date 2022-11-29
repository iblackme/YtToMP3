import { db } from "../lib/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export const SongsList = () => {
  const [songs, setSongs] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "songs")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSongs(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <center>SONGS</center>
      <audio
        src="https://077e-197-156-103-205.eu.ngrok.io/downloaded/Anne-Marie%20-%202002%20%5BOfficial%20Video%5D.mp3"
        controls
      />
      <div className="songs">
        {songs?.map((song) => (
          <div key={song.id}>
            <h1>{song.title}</h1>
            <img src={song.imglink} alt={song.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
