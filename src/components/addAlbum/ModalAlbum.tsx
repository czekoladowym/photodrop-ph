import {
  Card,
  Desc,
  Input,
  InputLoc,
  InputName,
  Modal,
  Title,
} from "./ModalAlbumStyles";

interface Iprops {
  active: boolean;
  close?: () => void;
}

const ModalAlbum = ({ active, close }: Iprops) => {
  if (!active) {
    return null;
  }
  return (
    <Modal onClick={close}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Title>Create your album:</Title>
        <Desc>All fields required</Desc>
        <InputName>Album Name:</InputName>
        <Input placeholder="Enter album name..." />
        <InputLoc>Album Location:</InputLoc>
        <Input placeholder="Enter album location..." />
        <input type="date" />
      </Card>
    </Modal>
  );
};

export default ModalAlbum;
