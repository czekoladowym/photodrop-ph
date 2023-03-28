import { ChangeEvent, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Back,
  DeletePreview,
  FileInput,
  Header,
  Loader,
  Logo,
  MainSection,
  PhotoSection,
  PreviewImg,
  PreviewSection,
  RenamePreview,
  UploadBtn,
  UploadSection,
} from "./UploadStyles";
import logo from "/img/main-logo.svg";
import arrowBack from "/img/arrow_back.svg";
import axios, { AxiosResponse } from "axios";
import loader from "/img/ring-loader.svg";

const Upload = () => {
  const [images, setImages] = useState<
    { name: string; type: string; data: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
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
          newImages.push({
            type: files[i].type,
            data: base64Image,
            name: files[i].name,
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
    try {
      const res: AxiosResponse = await axios.post(
        baseUrl,
        {
          albumId: uuid,
          photos: images,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
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

  const handleRenameImage = (index: number, newName: string) => {
    const newImages = [...images];
    newImages[index].name = newName;
    setImages(newImages);
  };

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
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
              <RenamePreview
                className="rename-button"
                type="text"
                defaultValue={image.name}
                onBlur={(e: any) => handleRenameImage(index, e.target.value)}
              />
            </PreviewSection>
          ))}
        </PhotoSection>
      </MainSection>
    </>
  );
};

export default Upload;
