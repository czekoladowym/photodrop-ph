import styled from "styled-components";

export const Header = styled.div`
  background-color: #fff;
  display: flex;
  height: 66.8px;
  justify-content: center;
  border-bottom: 1px solid #f1f0ec;
  position: relative;
  user-select: none;
`;
export const Logo = styled.img`
  height: 28px;
  margin: 19px auto;
  cursor: pointer;
`;
export const MainSection = styled.div`
  position: relative;
  margin: 30px 70px;
  display: flex;
  -webkit-box-pack: center;
  flex-direction: column;
  align-items: center;
`;

export const FileInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
export const UploadSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const UploadBtn = styled.button`
  display: flex;
  background-color: #6561c6;
  color: #fff;
  font-size: 20px;
  font-family: "Futura PT";
  height: 50px;
  width: 200px;
  border: 1px solid #afafaf;
  cursor: pointer;
  border-radius: 23px;
  align-items: center;
  justify-content: center;
  box-shadow: #848484 1px 2px 7px;
  :hover {
    background: rgb(125 120 243);
  }
  :disabled {
    background-color: rgb(160 156 255);
    cursor: wait;
  }
`;

export const Back = styled.img`
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 15px 0 0 15px;
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const PreviewImg = styled.img`
  user-select: none;
  border-radius: 10px;
  height: 150px;
  margin: 10px;
  width: auto;
`;
export const PreviewSection = styled.div`
  position: relative;
  &:hover .delete-button,
  &:hover .rename-button,
  &:hover .addPerson-button {
    visibility: visible;
  }
`;

export const DeletePreview = styled.div`
  visibility: hidden;
  opacity: 1;
  display: flex;
  background-color: #efefefad;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 12px;
  right: 13px;
  border-radius: 8px;
  align-items: stretch;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;
export const RenamePreview = styled.input`
  position: absolute;
  visibility: hidden;
  opacity: 0.7;
  top: 138px;
  left: 10px;
  width: calc(100% - 20px);
  :focus {
    opacity: 1;
  }
`;
export const Loader = styled.img`
  height: 30px;
`;
export const AddPerson = styled.img`
  left: 10;
  visibility: hidden;
  opacity: 1;
  display: flex;
  background-color: #efefefad;
  height: 25px;
  width: 25px;
  position: absolute;
  bottom: 16px;
  left: 13px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  padding: 2px;
`;
