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
  justify-content: center;
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

export const UploadBtn = styled.div`
  background-color: violet;
  height: 60px;
  width: 300px;
  border: 1px solid black;
  border-radius: 20px;
`;

export const Back = styled.img`
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 15px 0 0 15px;
`;
