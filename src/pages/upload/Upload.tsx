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

interface IProps {
  name: string;
  type: string;
  data: string;
}

const Upload = () => {
  const [images, setImages] = useState<IProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const filePicker = useRef<HTMLInputElement>(null);
  const uuid = useParams().id;

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newImages: { data: string; name: string; type: string }[] = [];

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
          });

          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        };
      }
    }
  };

  const baseUrl =
    "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/photos";

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
    setModalOpen(false);
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
                onClick={() => setModalOpen(true)}
              />
              <ModalPerson active={modalOpen} close={handleModal} />
            </PreviewSection>
          ))}
        </PhotoSection>
      </MainSection>
    </>
  );
};

export default Upload;
