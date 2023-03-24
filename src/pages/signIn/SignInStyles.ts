import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f0ec;
  user-select: none;
`;
export const Logo = styled.img`
  margin: 19px auto;
`;

export const MainSection = styled.div`
  margin: 77px auto 0px;
  display: flex;
  flex-direction: column;
  width: 420px;
`;

export const MainTitle = styled.h1`
  margin: 0px auto;
  color: #262626;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Desc = styled.p`
  margin: 15px 0px 0px auto;
  color: grey;
`;

export const SubTitle = styled.p`
  margin-top: 21px;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`;

export const RegInput = styled.input`
  box-sizing: border-box;
  padding: 19px 17px;
  margin-top: 10px;
  height: 40px;
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  width: 100%;
  font-size: 18px;
  line-height: 23px;
  :focus {
    outline: 0.5px solid blueviolet;
  }
  ::placeholder {
    user-select: none;
    color: #b6b6b6;
  }
`;

export const NonRequired = styled(SubTitle)`
  margin-left: 11px;
`;

export const SubmitBtn = styled.button`
  font-weight: 600;
  height: 50px;
  margin-top: 40px;
  width: 100%;
  background: #3300cc;
  border: none;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
  border-radius: 50px;
  user-select: none;
  cursor: pointer;
  :hover {
    background: rgb(115 68 255);
    transition: 0.3s;
  }
`;
