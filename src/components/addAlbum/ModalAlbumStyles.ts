import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
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
  width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-top: 50px;
`;

export const Desc = styled.p`
  margin-top: 7px;
  text-decoration: underline;
  margin-left: 160px;
  color: rgb(119 119 119);
  font-size: 20px;
`;

export const InputName = styled.p`
  font-weight: 500;
  margin-top: 40px;
`;
export const InputLoc = styled(InputName)`
  margin-right: 185px;
  margin-top: 20px;
`;

export const InputDate = styled(InputName)`
  margin-top: 20px;
`;

export const Input = styled.input`
  margin-top: 10px;
  border: 2px solid #6e6e6e;
  border-radius: 10px;
  height: 35px;
  width: 300px;
  font-size: 18px;
  padding: 10px;
  box-shadow: 2px 2px 5px #d5a7ff;
  :focus {
    outline-color: rgb(82 92 243);
    outline-style: double;
  }
`;

export const Btn = styled.button`
  border: 1px solid rgb(82 92 243);
  font-weight: 500;
  font-family: "Termina";
  font-size: 25px;
  color: #fff;
  border-radius: 20px;
  background-color: black;
  height: 65px;
  width: 300px;
  margin-top: 50px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: rgb(44 44 44);
  }
`;
export const Cross = styled.img`
  position: absolute;
  height: 40px;
  top: 0;
  right: 0;
  margin: 10px 10px 0 0;
  cursor: pointer;
  user-select: none;
`;
