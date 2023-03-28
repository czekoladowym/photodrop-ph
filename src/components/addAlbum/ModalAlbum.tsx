import {
  Btn,
  Card,
  Cross,
  Desc,
  Input,
  InputDate,
  InputLoc,
  InputName,
  Loader,
  Modal,
  Title,
} from "./ModalAlbumStyles";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cross from "/img/close_cross.svg";
import loader from "/img/ring-loader.svg";

interface Iprops {
  active: boolean;
  close: () => void;
}
const baseUrl =
  "https://1fhuccr2jh.execute-api.us-east-1.amazonaws.com/dev/albums";

const ModalAlbum = ({ active, close }: Iprops) => {
  const [title, setTitle] = useState<string>("");
  const [location, setLoc] = useState<string>("");
  const [dataPicker, setDataPicker] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!title || !location || !dataPicker) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        baseUrl,
        {
          title,
          location,
          dataPicker,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      close();
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
        <Cross src={cross} onClick={close} />
        <Title>Create your album:</Title>
        <Desc>All fields required</Desc>
        <div>
          <InputName>Album Name:</InputName>
          <Input
            placeholder="Enter album name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />
          <InputLoc>Album Location:</InputLoc>
          <Input
            placeholder="Enter album location..."
            value={location}
            onChange={(e) => setLoc(e.target.value)}
            required={true}
          />
          <InputDate>Who created this album:</InputDate>
          <Input
            type="text"
            value={dataPicker}
            placeholder={"Enter creator name..."}
            onChange={(e) => setDataPicker(e.target.value)}
            required={true}
          />
        </div>

        <Btn onClick={handleSubmit}>
          {loading ? <Loader src={loader} /> : <p>Create album</p>}
        </Btn>
      </Card>
    </Modal>
  );
};
/* <Loader src={loader} /> */
export default ModalAlbum;
