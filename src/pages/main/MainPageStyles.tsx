import styled from "styled-components";

export const Header = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f0ec;
  position: relative;
`;
export const Logo = styled.img`
  height: 28px;
  margin: 19px auto;
  cursor: pointer;
`;
export const AddAlbum = styled.div`
  border: 1.5px solid rgb(147, 147, 147);
  border-radius: 15px;
  height: 90px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  flex-direction: column;
  justify-content: center;
  :hover {
    background-color: rgb(247 244 244);
    transition: all 9ms cubic-bezier(1, -0.22, 0.1, 1.14) 0s;
  }
`;
export const MainSection = styled.div`
  position: relative;
  margin: 30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightBanner = styled.img`
  position: absolute;
  z-index: -3;
  height: 100vh;
  right: -70px;
  top: -100px;
`;

export const LeftBanner = styled(RightBanner)`
  right: auto;
  left: -210px;
`;

export const PlusIcon = styled.img`
  height: 60px;
`;
export const PlusAlbum = styled.p`
  font-size: 25px;
  margin-bottom: 5px;
`;
