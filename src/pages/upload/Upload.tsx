// import { ChangeEvent, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Back,
//   DeletePreview,
//   FileInput,
//   Header,
//   Logo,
//   MainSection,
//   PhotoSection,
//   PreviewImg,
//   PreviewSection,
//   UploadBtn,
//   UploadSection,
// } from "./UploadStyles";
// import logo from "/img/main-logo.svg";
// import arrowBack from "/img/arrow_back.svg";

// const Upload = () => {
//   const [image, setImage] = useState<string[]>([]);
//   const filePicker = useRef<HTMLInputElement>(null);

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;

//     if (files) {
//       const newImages: string[] = [];

//       for (let i = 0; i < files.length; i++) {
//         const reader = new FileReader();
//         reader.readAsDataURL(files[i]);

//         reader.onload = () => {
//           const base64Image = reader.result as string;
//           newImages.push(base64Image);

//           if (newImages.length === files.length) {
//             setImage(newImages);
//           }
//         };
//       }
//     }
//   };
//   const handlePick = () => {
//     if (filePicker.current) {
//       filePicker.current.click();
//     }
//   };

//   return (
//     <>
//       <Header>
//         <Link to={"/home"}>
//           <Back src={arrowBack} />
//         </Link>
//         <Link to={"/home"}>
//           <Logo src={logo} />
//         </Link>
//       </Header>
//       <MainSection>
//         <UploadSection>
//           <UploadBtn onClick={handlePick}>Choose photo</UploadBtn>
//           <FileInput
//             type="file"
//             ref={filePicker}
//             multiple
//             onChange={handleImageUpload}
//           />
//           <UploadBtn>Upload</UploadBtn>
//         </UploadSection>
//         <PhotoSection>
//           {image.map((img, i) => (
//             <PreviewSection key={i}>
//               <DeletePreview>&#10006;</DeletePreview>
//               <PreviewImg src={img} />
//             </PreviewSection>
//           ))}
//         </PhotoSection>
//       </MainSection>
//     </>
//   );
// };
import { ChangeEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Back,
  DeletePreview,
  FileInput,
  Header,
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

const Upload = () => {
  const [images, setImages] = useState<{ data: string; name: string }[]>([]);
  const filePicker = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newImages: { data: string; name: string }[] = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);

        reader.onload = () => {
          const base64Image = reader.result as string;
          newImages.push({ data: base64Image, name: files[i].name });

          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        };
      }
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
          <UploadBtn>Upload</UploadBtn>
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
