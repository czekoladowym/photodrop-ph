import {
  Logo,
  Header,
  MainTitle,
  MainSection,
  SubTitle,
  RegInput,
  NonRequired,
  SubmitBtn,
  Desc,
} from "./SignInStyles";
import logo from "/img/main-logo.svg";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { redirect, useNavigate } from "react-router-dom";

interface SignInFormData {
  login: string;
  password: string;
}

const SignIn = () => {
  const [trueLogin, setTrueLogin] = useState<string>("");
  const [truePass, setTruePass] = useState<string>("");
  const navigate = useNavigate();

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/sign-in",
        {
          login: trueLogin,
          password: truePass,
        }
      );
      console.log(res.data.accessToken);
      window.localStorage.setItem("token", res.data.accessToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header>
        <Logo src={logo} />
      </Header>
      <MainSection>
        <MainTitle>Oh, we met again</MainTitle>
        <Desc>* - required fields</Desc>
        <form onSubmit={handleFormSubmit}>
          <SubTitle>*Login:</SubTitle>
          <RegInput
            type="text"
            placeholder="Enter your login..."
            value={trueLogin}
            onChange={(e) => setTrueLogin(e.target.value)}
            required={true}
          />
          <SubTitle>*Password:</SubTitle>
          <RegInput
            type="password"
            placeholder="Enter your password..."
            value={truePass}
            onChange={(e) => setTruePass(e.target.value)}
            required={true}
          />
          <SubmitBtn type="submit" onClick={() => console.log("hello world")}>
            Sign In
          </SubmitBtn>
        </form>
      </MainSection>
    </>
  );
};

export default SignIn;
