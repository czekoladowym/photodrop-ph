import { ChangeEvent, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import {
  Back,
  DeletePreview,
  FileInput,
  Header,
  Logo,
  Loader,
  MainSection,
  PhotoSection,
  PreviewImg,
  PreviewSection,
  RenamePreview,
  UploadBtn,
  UploadSection,
  AddPerson,
} from "./UploadStyles";
import logo from "/img/main-logo.svg";
import arrowBack from "/img/arrow_back.svg";
import axios, { AxiosResponse } from "axios";
import loader from "/img/ring-loader.svg";
import addPerson from "/img/addPerson.svg";
import ModalPerson from "../../components/addPerson/ModalPerson";
import { AboutUsers } from "../../interfaces/interfaces";

interface IImage {
  name: string;
  type: string;
  data: string;
  usersPhoneNumbers: string[];
}
const baseUrl =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/photos";

const Upload = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [allInfo, setAllInfo] = useState<AboutUsers[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const filePicker = useRef<HTMLInputElement>(null);
  const uuid = useParams().id;

  const handleAddSelectedNumbers = (index: number) => (numbers: string[]) => {
    images[index].usersPhoneNumbers = [...numbers];
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: {
        data: string;
        name: string;
        type: string;
        usersPhoneNumbers: string[];
      }[] = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          const base64Image = reader.result as string;
          const base64ImageWithoutPrefix = base64Image.replace(
            /^data:image\/\w+;base64,/,
            ""
          );
          const uniqueId = uuidv4();
          newImages.push({
            type: files[i].type,
            data: base64Image,
            name: uniqueId,
            usersPhoneNumbers: selectedNumbers,
          });

          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        };
      }
    }
  };


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
    } catch (error) {
      console.log(error);
    }
  };

  const postAllPhoto = async () => {
    setLoading(true);
    const copyOfImg = [...images];
    if (copyOfImg.length === 0) {
      window.alert("Please select at least one image.");
      setLoading(false);
      return;
    }
    try {
      const res: AxiosResponse = await axios.post(
        baseUrl,
        {
          albumId: uuid,
          photos: copyOfImg.map((img) => {
            img.data = img.data.replace(/^data:image\/\w+;base64,/, "");
            return img;
          }),
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        window.alert("Upload successful!");
      }
      setImages([]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleModal = () => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  };

  const handlePickPerson = (index: number) => {
    setSelectedImageIndex(index);
    getAllNums();
    setModalOpen(true);
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
        <UploadSection>
          <UploadBtn onClick={handlePick}>Choose photo</UploadBtn>
          <FileInput
            type="file"
            ref={filePicker}
            multiple
            onChange={handleImageUpload}
          />
          <UploadBtn onClick={postAllPhoto} disabled={loading}>
            {loading ? <Loader src={loader} /> : "Upload"}
          </UploadBtn>
        </UploadSection>
        <PhotoSection>
          {images.length === 0 && (
            <h1 style={{ color: "#a0a0a0" }}>Please select a photo...</h1>
          )}
          {images.map((image, index) => (
            <PreviewSection key={index}>
              <DeletePreview
                onClick={() => handleDeleteImage(index)}
                className="delete-button"
              >
                &#10006;
              </DeletePreview>
              <PreviewImg src={image.data} />
              <AddPerson
                className="addPerson-button"
                src={addPerson}
                onClick={() => handlePickPerson(index)}
              />
              <ModalPerson
                active={modalOpen && selectedImageIndex === index}
                close={handleModal}
                allInfo={allInfo}
                onAddSelectedNumbers={handleAddSelectedNumbers(index)}
              />
            </PreviewSection>
          ))}
        </PhotoSection>
      </MainSection>
    </>
  );
};

export default Upload;
