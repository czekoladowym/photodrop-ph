import { useState } from "react";
import AddPhoto from "../addPhoto/AddPhoto";
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

const Album = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const handleModal = () => {
    setModalActive(false);
  };
  return (
    <Albums>
      <AlbumField>
        <div onClick={() => setModalActive(true)}>
          <StaticIconBg className="static">
            <StaticIcon className="static" src={staticIcon} />
          </StaticIconBg>
          <DynamicIcon className="active" src={dynamicIcon} />
        </div>
        <AddPhoto active={modalActive} close={handleModal} />
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
