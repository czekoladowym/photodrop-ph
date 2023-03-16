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
} from "./SignUpStyles";
import logo from "../../assets/img/main-logo.svg";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { redirect } from "react-router-dom";

interface SignInFormData {
  login: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    login: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const res = await axios.post(
      "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/sign-in",
      formData
    );
    if (res.status === 200) {
      window.location.replace("/home");
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
            value={formData.login}
            onChange={handleInputChange}
            required={true}
          />
          <SubTitle>*Password:</SubTitle>
          <RegInput
            type="password"
            placeholder="Enter your password..."
            value={formData.password}
            onChange={handleInputChange}
            required={true}
          />
        </form>
        <SubmitBtn type="submit" onClick={() => console.log("hello world")}>
          Create account
        </SubmitBtn>
      </MainSection>
    </>
  );
};

export default SignIn;
