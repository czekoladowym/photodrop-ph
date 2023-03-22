import {
  Header,
  Logo,
  AddAlbum,
  MainSection,
  PlusIcon,
  PlusAlbum,
} from "./MainPageStyles";
import Album from "../../components/album/Album";
import logo from "/img/main-logo.svg";
import plusIcon from "/img/plus-icon.svg";
import { useEffect, useState } from "react";
import ModalAlbum from "../../components/addAlbum/ModalAlbum";
import axios, { AxiosResponse } from "axios";

const baseUrl =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/albums";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const getAllAlbums = async () => {
    try {
      const res: AxiosResponse = await axios.get(baseUrl, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAlbums();
  });
  const handleModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header>
        <Logo src={logo} />
      </Header>
      <MainSection>
        <AddAlbum onClick={() => setModalOpen(true)}>
          <PlusIcon src={plusIcon} />
          <PlusAlbum>Create new album</PlusAlbum>
        </AddAlbum>
        <ModalAlbum active={modalOpen} close={handleModal} />
        <Album />
      </MainSection>
    </>
  );
};

export default MainPage;
