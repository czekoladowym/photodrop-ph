import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { AboutUsers } from "../../interfaces/interfaces";
import {
  AutoComplete,
  Card,
  CompleteNums,
  Cross,
  InputField,
  Modal,
  NumInput,
  PhoneImg,
  Title,
} from "./ModalPersonStyles";
import cross from "/img/close_cross.svg";
import phoneNum from "/img/phone_number.svg";

interface Iprops {
  active: boolean;
  close: () => void;
  allInfo?: any;
}

const ModalPerson = ({ active, close, allInfo }: Iprops) => {
  const [users, setUsers] = useState(allInfo);
  const [text, setText] = useState<string>("");
  const [matchedUser, setMatchedUser] = useState<string[]>([]);

  // const OnChangeHandler = (text: string) => {
  //   let matches = [];
  //   if (text.length > 0) {
  //     matches = allInfo.filter((user: string) => {
  //       const regex = new RegExp(`${text}`, "gi");
  //       return user.match(regex);
  //     });
  //   }
  //   setMatchedUser(matches);
  //   console.log(matches);
  //   setText(text);
  // };
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [display, setDisplay] = useState<boolean>(false);
  const [phoneMatch, setPhoneMatch] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    if (numericValue.length > 10) {
      setErrorMessage("Phone number should have at most 10 digits");
    } else {
      setErrorMessage("");
      const formattedValue =
        "+ " + numericValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
      setNumber(formattedValue);
    }
  };

  if (!active) {
    return null;
  }
  return (
    <Modal onClick={close}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Cross src={cross} onClick={close} />
        <Title>Add people on photo</Title>
        <InputField>
          <PhoneImg src={phoneNum} />
          <NumInput
            type="tel"
            placeholder="Enter person number..."
            value={number}
            onChange={handleChange}
            onFocusCapture={() => setDisplay(true)}
            onBlur={() => setDisplay(false)}
          />
        </InputField>
        {display && (
          <AutoComplete>
            {allInfo.map((item: string, i: number) => (
              <CompleteNums key={i}>{item}</CompleteNums>
            ))}
          </AutoComplete>
        )}
      </Card>
    </Modal>
  );
};

export default ModalPerson;
