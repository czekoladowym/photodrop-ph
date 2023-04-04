import axios, { all } from "axios";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { AboutUsers } from "../../interfaces/interfaces";
import {
  AddPersonBtn,
  AutoComplete,
  Card,
  ChoosenNum,
  ChoosenNums,
  CompleteNums,
  Cross,
  ErrorBlock,
  ErrorMessage,
  InputField,
  Modal,
  NumDelete,
  NumInput,
  PhoneImg,
  SaveNum,
  Title,
} from "./ModalPersonStyles";
import cross from "/img/close_cross.svg";
import cancel from "/img/cancel-cross.svg";
import phoneNum from "/img/phone_number.svg";

interface Iprops {
  active: boolean;
  close: () => void;
  allInfo?: any;
  onAddSelectedNumbers: (numbers: string[]) => void;
}

const ModalPerson = ({
  active,
  close,
  allInfo,
  onAddSelectedNumbers,
}: Iprops) => {
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
  }, [wrapperRef, autoCompleteRef, errorMessage]);

  const updateSearchValue = (value: string) => {
    setSearch(value);
    setDisplay(false);
  };

  const handleAddPeople = () => {
    if (choosenNum.length > 0) {
      onAddSelectedNumbers(choosenNum);
      close();
    }
  };

  const handleAddNumber = () => {
    if (search.length < 12) {
      setErrorMessage("Phone number should have at least 12 digits.");
    } else if (choosenNum.includes(search)) {
      setErrorMessage("Phone number already added.");
    } else {
      setErrorMessage("");
      setChoosenNum([...choosenNum, search]);
      setSearch("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = event.target.value.replace(/\D/g, "");
    setSearch("+" + numericValue);
  };

  const handleDeleteNumber = (index: number) => {
    const newNums = [...choosenNum];
    newNums.splice(index, 1);
    setChoosenNum(newNums);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (search.length < 12) {
        setErrorMessage("Phone number should have at least 12 digits.");
      } else {
        handleAddNumber();
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
              maxLength={16}
              onClick={() => setDisplay(true)}
              placeholder="Enter person number..."
              value={search}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <AddPersonBtn onClick={handleAddNumber}>Add</AddPersonBtn>
          </InputField>
          {display && (
            <AutoComplete ref={autoCompleteRef}>
              {options
                .filter((option: string) =>
                  option
                    .toLocaleLowerCase()
                    .startsWith(search.toLocaleLowerCase())
                )
                .map((value, i) => {
                  return (
                    <CompleteNums
                      onClick={() => updateSearchValue(value)}
                      key={i}
                      tabIndex={0}
                    >
                      {value}
                    </CompleteNums>
                  );
                })}
            </AutoComplete>
          )}
          {errorMessage && (
            <ErrorMessage>
              <ErrorBlock></ErrorBlock>
              {errorMessage}
            </ErrorMessage>
          )}
          <ChoosenNums>
            {choosenNum.map((num, i) => (
              <ChoosenNum key={i} onClick={() => handleDeleteNumber(i)}>
                {num} <NumDelete src={cancel} />
              </ChoosenNum>
            ))}
          </ChoosenNums>
          <SaveNum onClick={handleAddPeople}>Save selected numbers</SaveNum>
        </Card>
      </div>
    </Modal>
  );
};

export default ModalPerson;
