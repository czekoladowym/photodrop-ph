import axios, { all } from "axios";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { AboutUsers } from "../../interfaces/interfaces";
import {
  AutoComplete,
  Card,
  ChoosenNum,
  ChoosenNums,
  CompleteNums,
  Cross,
  InputField,
  Modal,
  NumDelete,
  NumInput,
  PhoneImg,
  Title,
} from "./ModalPersonStyles";
import cross from "/img/close_cross.svg";
import cancel from "/img/cancel-cross.svg";
import phoneNum from "/img/phone_number.svg";

interface Iprops {
  active: boolean;
  close: () => void;
  allInfo?: any;
}

const ModalPerson = ({ active, close, allInfo }: Iprops) => {
  const [display, setDisplay] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [choosenNum, setChoosenNum] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const autoCompleteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOptions(allInfo);
  }, [allInfo]);

  const handleClickOutside = (event: MouseEvent) => {
    const { current: wrap } = wrapperRef;
    const { current: autoComplete } = autoCompleteRef;
    if (wrap && !wrap.contains(event.target as Node)) {
      setDisplay(false);
    }
    if (autoComplete && !autoComplete.contains(event.target as Node)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, autoCompleteRef]);

  const updateSearchValue = (value: string) => {
    setSearch(formatPhoneValue(value));
    setDisplay(false);
  };

  const handleBackSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace") return;
    if (search.replace(/[^\d]/g, "").length === 8) {
      setSearch(search.substring(6));
    }
  };

  const formatPhoneValue = (value: string) => {
    if (!value) return "+";
    const phoneNum = value.replace(/[^\d]/g, "");
    const phoneNumLength = phoneNum.length;
    if (phoneNumLength < 4) return `+${phoneNum}`;
    if (phoneNumLength < 6) {
      return `+${phoneNum.slice(0, 2)}(${phoneNum.slice(2, 6)})`;
    }
    if (phoneNumLength <= 8) {
      return `+${phoneNum.slice(0, 2)}(${phoneNum.slice(
        2,
        5
      )}) ${phoneNum.slice(5, 8)}`;
    }
    return `+${phoneNum.slice(0, 2)}(${phoneNum.slice(2, 5)})${phoneNum.slice(
      5,
      8
    )}-${phoneNum.slice(8, 12)}`;
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneValue(e.currentTarget.value);
    setSearch(formattedPhone);
  };

  const handleAddNumber = () => {
    if (formatPhoneValue(search)) {
      setChoosenNum([...choosenNum, search]);
      setSearch("");
    } else {
      console.log("success", search.length);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = search.replace(/\D/g, "");
    if (numericValue.length > 10) {
      setErrorMessage("Phone number should have at most 10 digits");
    } else {
      setErrorMessage("");
      const formattedValue =
        "+ " + numericValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
      setSearch(formattedValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddNumber();
    }
    if (event.key === "Backspace") {
      const numericValue = search.replace(/[^\d]/g, "");
      if (numericValue.length === 5 || numericValue.length === 4) {
        event.preventDefault();
        setSearch(formatPhoneValue(numericValue.slice(0, -1)));
      }
    }
  };

  if (!active) {
    return null;
  }

  return (
    <Modal onClick={close}>
      <div
        ref={wrapperRef}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Card>
          <Cross src={cross} onClick={close} />
          <Title>Add people on photo</Title>
          <InputField>
            <PhoneImg src={phoneNum} />
            <NumInput
              onClick={() => setDisplay(true)}
              placeholder="Enter person number..."
              value={search}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
            />
          </InputField>
          {display && (
            <AutoComplete ref={autoCompleteRef}>
              {options
                .filter((option: string) =>
                  option
                    .toLocaleLowerCase()
                    .startsWith(
                      search.toLocaleLowerCase().replaceAll(/[() -]/g, "")
                    )
                )
                .map((value, i) => {
                  return (
                    <CompleteNums
                      onClick={() => updateSearchValue(value)}
                      key={i}
                      tabIndex={0}
                    >
                      {formatPhoneValue(value)}
                    </CompleteNums>
                  );
                })}
            </AutoComplete>
          )}
          {errorMessage && <div>{errorMessage}</div>}
          <ChoosenNums>
            {choosenNum.map((num, i) => (
              <ChoosenNum key={i}>
                {num} <NumDelete src={cancel} />
              </ChoosenNum>
            ))}
          </ChoosenNums>
        </Card>
      </div>
    </Modal>
  );
};

export default ModalPerson;
