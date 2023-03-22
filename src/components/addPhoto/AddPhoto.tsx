import { Card, Modal, Title } from "./AddPhotoStyles";

interface Iprops {
  active: boolean;
  close?: () => void;
}

const AddPhoto = ({ active, close }: Iprops) => {
  const handleSubmit = () => {
    alert("the form completed");
  };

  if (!active) {
    return null;
  }
  return (
    <>
      <Modal onClick={close}>
        <form onSubmit={handleSubmit}>
          <Card onClick={(e) => e.stopPropagation()}>
            <Title>Add new photo:</Title>
          </Card>
        </form>
      </Modal>
    </>
  );
};

export default AddPhoto;
