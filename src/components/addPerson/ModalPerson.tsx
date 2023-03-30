import axios from "axios";
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
}

const ModalPerson = ({ active, close }: Iprops) => {
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allNums, setAllNums] = useState<string[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [allInfo, setAllInfo] = useState<AboutUsers[]>([]);

  useEffect(() => {
    const getAllNums = async () => {
      try {
        const res = await axios.get<AboutUsers[]>(
          "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/users",
          {
            headers: {
              Authorization: window.localStorage.getItem("token"),
            },
          }
        );
        setAllInfo(res.data);
        const nums: string[] = [];
        allInfo.map((num) => nums.push(num.phoneNumber));
        setAllNums(nums);
      } catch (error) {
        console.log(error);
      }
    };
    getAllNums();
  }, []);

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
            {allInfo.map((info, i) => (
              <CompleteNums key={i}>{info.phoneNumber}</CompleteNums>
            ))}
          </AutoComplete>
        )}
      </Card>
    </Modal>
  );
};

export default ModalPerson;
