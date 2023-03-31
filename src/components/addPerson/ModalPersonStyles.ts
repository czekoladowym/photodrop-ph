import { Input } from "./../addAlbum/ModalAlbumStyles";
import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  animation: 0.7s show ease;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  border: 1px solid #656565;
  border-radius: 30px;
  height: 540px;
  width: 370px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  width: 87%;
  font-size: 23px;
  margin-top: 50px;
  text-align: center;
`;

export const Cross = styled.img`
  position: absolute;
  height: 35px;
  top: 0;
  right: 0;
  margin: 10px 14px 0 0;
  cursor: pointer;
  user-select: none;
`;

export const NumInput = styled.input`
  margin-top: 10px;
  border: 2px solid #6e6e6e;
  border-radius: 10px;
  height: 35px;
  width: 200px;
  font-size: 18px;
  padding: 10px;
  padding: 16px;
  padding-left: 35px;
  box-shadow: 2px 2px 5px #d5a7ff;
  :focus {
    outline-color: rgb(82 92 243);
    outline-style: double;
  }
  ::placeholder {
    font-size: 17px;
  }
`;

export const AutoComplete = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  width: 200px;
  border: 1px solid rgb(213, 167, 255);
  box-shadow: rgb(213, 167, 255) 2px 2px 5px;
  border-radius: 10px;
`;

export const InputField = styled.div`
  position: relative;
`;

export const PhoneImg = styled.img`
  top: 14px;
  left: 6px;
  height: 27px;
  position: absolute;
  user-select: none;
`;

export const CompleteNums = styled.div`
  font-family: "Futura PT";
  width: 100%;
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid #e3e3e3;
  :hover {
    border-radius: 10px;
    background-color: #e3e3e3;
  }
`;
