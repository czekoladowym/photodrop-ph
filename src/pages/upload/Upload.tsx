import { ChangeEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Back,
  FileInput,
  Header,
  Logo,
  MainSection,
  UploadBtn,
} from "./UploadStyles";
import logo from "/img/main-logo.svg";
import arrowBack from "/img/arrow_back.svg";

const Upload = () => {
  const filePicker = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<null>(null);
  const [uploaded, setUploaded] = useState();

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    } else {
      e.preventDefault();
      console.log("change", e?.target.files);
      const files = e?.target.files;
    }
  };

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target.files);
  };

  return (
    <>
      <Header>
        <Link to={"/home"}>
          <Back src={arrowBack} />
        </Link>
        <Link to={"/home"}>
          <Logo src={logo} />
        </Link>
      </Header>
      <MainSection>
        <button onClick={handlePick}>Choose Photo</button>
        <FileInput
          type="file"
          accept="image/*"
          multiple
          ref={filePicker}
          onChange={handleFile}
        />
        <button onClick={handleUpload}>Upload</button>
      </MainSection>
    </>
  );
};

export default Upload;
