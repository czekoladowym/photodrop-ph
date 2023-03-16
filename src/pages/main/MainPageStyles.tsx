import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f0ec;
  position: relative;
`;
export const Logo = styled.img`
  margin: 19px auto;
`;
export const AddAlbum = styled.div`
  position: absolute;
  border: 1.5px solid #b7b7b7;
  border-radius: 30%;
  top: 2px;
  right: 40px;
  height: 55px;
  width: 55px;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgb(227 225 225);
    transition: 0.3ms;
  }
`;
export const PlusImg = styled.img`
  height: 55px;
  width: 55px;
`;
export const MainSection = styled.div`
  margin: 30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
