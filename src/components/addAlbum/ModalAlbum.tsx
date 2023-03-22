import {
  Btn,
  Card,
  Desc,
  Form,
  Input,
  InputDate,
  InputLoc,
  InputName,
  Modal,
  Title,
} from "./ModalAlbumStyles";
import axios from "axios";

interface Iprops {
  active: boolean;
  close?: () => void;
}
const baseUrl =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/albums";

const ModalAlbum = ({ active, close }: Iprops) => {
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        baseUrl,
        {
          title: "hey",
          location: "Kiev",
          dataPicker: "23.04.2003",
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (!active) {
    return null;
  }
  return (
    <Modal onClick={close}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Title>Create your album:</Title>
        <Desc>All fields required</Desc>
        <div>
          <InputName>Album Name:</InputName>
          <Input placeholder="Enter album name..." />
          <InputLoc>Album Location:</InputLoc>
          <Input placeholder="Enter album location..." />
          <InputDate>Album date:</InputDate>
          <Input type="date" />
          <button onClick={handleSubmit}>Test</button>
        </div>
      </Card>
    </Modal>
  );
};

export default ModalAlbum;
