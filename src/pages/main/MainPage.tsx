import {
  Header,
  Logo,
  AddAlbum,
  MainSection,
  RightBanner,
  LeftBanner,
  PlusIcon,
  PlusAlbum,
} from "./MainPageStyles";
import Album from "../../components/album/Album";
import logo from "/img/main-logo.svg";
import rightBanner from "/img/right-banner.svg";
import leftBanner from "/img/left-banner.svg";
import plusIcon from "/img/plus-icon.svg";

const MainPage = () => {
  return (
    <>
      <Header>
        <Logo src={logo} />
      </Header>
      <MainSection>
        <RightBanner src={rightBanner} />
        <LeftBanner src={leftBanner} />
        <AddAlbum>
          <PlusIcon src={plusIcon} />
          <PlusAlbum>Create new album</PlusAlbum>
        </AddAlbum>
        <Album />
      </MainSection>
    </>
  );
};

export default MainPage;
