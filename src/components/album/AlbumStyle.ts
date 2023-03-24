import styled from "styled-components";

export const AlbumField = styled.div`
  position: relative;
  height: 90px;
  width: 35%;
  border: 1.5px solid #939393;
  border-radius: 15px;
  display: flex;
  background-color: #fff;
`;
export const Albums = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

export const StaticIconBg = styled.div`
  cursor: pointer;
  margin-top: 2px;
  margin-left: 8px;
  display: flex;
  position: absolute;
  height: 83px;
  width: 80px;
  z-index: 2;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
export const StaticIcon = styled.img`
  cursor: pointer;
  height: 61px;
  width: 64px;
  background-color: #fff;
  user-select: none;
`;

export const DynamicIcon = styled(StaticIcon)`
  cursor: pointer;
  top: 3px;
  position: absolute;
  width: 84px;
  height: 81px;
  left: 6.05px;
  user-select: none;
`;

export const Naming = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
`;

export const AlbumName = styled.p`
  position: absolute;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
  left: 115px;
`;
export const AlbumLoc = styled.p`
  position: absolute;
  font-size: 26px;
  left: 115px;
  bottom: 10px;
`;
export const AlbumDate = styled.p`
  font-size: 22px;
  position: absolute;
  right: 15px;
  bottom: 10px;
`;
