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
  Naming,
  StaticIcon,
  StaticIconBg,
} from "./AlbumStyle";

import staticIcon from "/img/camera-folder-static.png";
import dynamicIcon from "/img/camera-folder.gif";

const baseUrl =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/albums";

const Album = () => {
  const [album, setAlbum] = useState<AlbumData>();
  const [modalActive, setModalActive] = useState<boolean>(false);

  const getAllAlbums = async () => {
    try {
      const res: AxiosResponse = await axios.get(baseUrl, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      setAlbum(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(album);
  const handleModal = () => {
    setModalActive(false);
  };
  return (
    <Albums>
      <AlbumField>
        <Link to={"/addPhoto"}>
          <StaticIconBg className="static">
            <StaticIcon className="static" src={staticIcon} />
          </StaticIconBg>
          <DynamicIcon className="active" src={dynamicIcon} />
        </Link>
        <Naming>
          <AlbumName>Hello World!</AlbumName>
          <AlbumLoc>Borshagovka, Kiev</AlbumLoc>
          <AlbumDate>20.03.2023</AlbumDate>
        </Naming>
      </AlbumField>
      <AlbumField>
        <StaticIconBg className="static">
          <StaticIcon className="static" src={staticIcon} />
        </StaticIconBg>
        <DynamicIcon className="active" src={dynamicIcon} />
        <Naming>
          <AlbumName>Happy New Year</AlbumName>
          <AlbumLoc>Salt-Lake-City, USA</AlbumLoc>
          <AlbumDate>25.12.2020</AlbumDate>
        </Naming>
      </AlbumField>
      <AlbumField>
        <StaticIconBg className="static">
          <StaticIcon className="static" src={staticIcon} />
        </StaticIconBg>
        <DynamicIcon className="active" src={dynamicIcon} />
        <Naming>
          <AlbumName>Uganda</AlbumName>
          <AlbumLoc>Mukono, Uganda</AlbumLoc>
          <AlbumDate>01.04.2016</AlbumDate>
        </Naming>
      </AlbumField>
      <AlbumField>
        <StaticIconBg className="static">
          <StaticIcon className="static" src={staticIcon} />
        </StaticIconBg>
        <DynamicIcon className="active" src={dynamicIcon} />
        <Naming>
          <AlbumName>Basketball</AlbumName>
          <AlbumLoc>New Jersey, USA</AlbumLoc>
          <AlbumDate>14.09.2021</AlbumDate>
        </Naming>
      </AlbumField>
      <AlbumField>
        <StaticIconBg className="static">
          <StaticIcon className="static" src={staticIcon} />
        </StaticIconBg>
        <DynamicIcon className="active" src={dynamicIcon} />
        <Naming>
          <AlbumName>Kendrick birthday</AlbumName>
          <AlbumLoc>Cologne, Germany</AlbumLoc>
          <AlbumDate>11.11.2001</AlbumDate>
        </Naming>
      </AlbumField>
      <AlbumField>
        <StaticIconBg className="static">
          <StaticIcon className="static" src={staticIcon} />
        </StaticIconBg>
        <DynamicIcon className="active" src={dynamicIcon} />
        <Naming>
          <AlbumName>Ganjubas</AlbumName>
          <AlbumLoc>Unknown, Unknown</AlbumLoc>
          <AlbumDate>13.01.2006</AlbumDate>
        </Naming>
      </AlbumField>
      <AlbumField>
        <StaticIconBg className="static">
          <StaticIcon className="static" src={staticIcon} />
        </StaticIconBg>
        <DynamicIcon className="active" src={dynamicIcon} />
        <Naming>
          <AlbumName>Крым 2010</AlbumName>
          <AlbumLoc>Крым, Украина</AlbumLoc>
          <AlbumDate>30.06.2010</AlbumDate>
        </Naming>
      </AlbumField>
    </Albums>
  );
};

export default Album;
