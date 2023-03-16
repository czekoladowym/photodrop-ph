import { Header, Logo, AddAlbum, PlusImg, MainSection } from "./MainPageStyles";
import Album from "../../components/album/Album";
import logo from "../../assets/img/main-logo.svg";
import plusIcon from "../../assets/img/plus-icon.svg";

const MainPage = () => {
  return (
    <>
      <Header>
        <Logo src={logo} />
        <AddAlbum>
          <PlusImg src={plusIcon} />
        </AddAlbum>
      </Header>
      <MainSection>
        <Album />
      </MainSection>
    </>
  );
};

export default MainPage;
