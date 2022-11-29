import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { SongsList } from "./songs.list.component";

export const Home = () => {
  const songForm = {
    id: "",
    link: "",
    imglink: "",
  };

  const [data, setData] = useState(null);
  const [ytLink, setYtLink] = useState(songForm);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { link, imglink } = ytLink;

  let validlink = link;
  if (link.length !== 11) {
    validlink = link.substr(link.lastIndexOf("v=") + 2, 11);
  }

  const dataFetch = async () => {
    setIsDownloading(true);
    console.log("stared fechinge");
    const data = await (
      await fetch(
        `https://youtube-to-mp-3-api.vercel.app/download/${validlink}`,
        {
          mode: "cors",
        }
      )
    ).json();
    console.log(data);

    // set state when the data received
    setData(data);
    setIsDownloading(false);
    let imagelink = `https://i.ytimg.com/vi/${validlink}/hqdefault.jpg`;

    try {
      alert("started");
      await addDoc(collection(db, "songs"), {
        link: data,
        imglink: imagelink,
        created: Timestamp.now(),
      });
      alert("done");

      resetsongForm();
    } catch (error) {
      alert("error ocurse");
      console.log(error);
    }
    console.log("is done");
    setIsDone(true);
  };

  console.log(data);
  const resetsongForm = () => {
    setYtLink(songForm);
  };

  const upload = async (e) => {
    e.preventDefault();

    dataFetch();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYtLink({ ...ytLink, [name]: value });
  };

  return (
    <>
      {isDownloading && <p> loading </p>}
      {!isDownloading && (
        <form onSubmit={upload}>
          <input
            type="text"
            label="link"
            placeholder="paste youtube link"
            value={link}
            name="link"
            onChange={handleChange}
          />

          <button type="submit"> UPLOAD</button>
        </form>
      )}
      <SongsList />
    </>
  );
};
