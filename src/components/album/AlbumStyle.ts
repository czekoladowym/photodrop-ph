import styled from "styled-components";

export const AlbumFieldStart = styled.div`
  height: 90px;
  width: 70%;
  border: 1px solid black;
  display: flex;
`;
export const AlbumFieldEnd = styled(AlbumFieldStart)`
  margin-top: 15px;
`;

export const Icon = styled.img`
  margin: 5px 10px;
  height: 80px;
  width: 80px;
  background-color: yellow;
`;
export const NameField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Naming = styled.h3`
  margin: 10px;
  text-decoration: underline;
`;
export const LocName = styled.h3`
  margin: 10px;
`;
