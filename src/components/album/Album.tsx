import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumData } from "../../interfaces/interfaces";
import AddPhoto from "../../pages/upload/Upload";
import {
  AlbumDate,
  AlbumField,
  AlbumLoc,
  AlbumName,
  Albums,
  DynamicIcon,
  Loading,
  Naming,
  StaticIcon,
  StaticIconBg,
} from "./AlbumStyle";

import staticIcon from "/img/camera-folder-static.png";
import dynamicIcon from "/img/camera-folder.gif";

const baseUrl =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/albums";

const Album = () => {
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getAllAlbums = async () => {
      try {
        const res: AxiosResponse = await axios.get(baseUrl, {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        });
        setLoading(false);
        setAlbums(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllAlbums();
  }, []);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Albums>
      {albums.map((album) => (
        <AlbumField key={album.id}>
          <Link to={`/${album.id}/addPhoto`}>
            <StaticIconBg className="static">
              <StaticIcon className="static" src={staticIcon} />
            </StaticIconBg>
            <DynamicIcon className="active" src={dynamicIcon} />
          </Link>
          <Naming>
            <AlbumName>{album.title}</AlbumName>
            <AlbumLoc>{album.location}</AlbumLoc>
            <AlbumDate>{album.createdDate}</AlbumDate>
          </Naming>
        </AlbumField>
      ))}
    </Albums>
  );
};

export default Album;
