import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import NewJokeForm from "./NewJokeForm";
import { useSelector } from "react-redux";
import { selectJokes } from "store/jokes";
import axios from "axios";

type Props = {
  handleCloseModal: () => void;
};
const Modal = ({ handleCloseModal }: Props) => {
  const { categories } = useSelector(selectJokes);

  const handleSubmitForm = async (data: SubmitJokeData) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_JOKE_API_URL}/submit?dry-run`,
        {
          formatVersion: 3,
          flags: {
            nsfw: true,
            religious: false,
            political: true,
            racist: false,
            sexist: false,
            explicit: false,
          },
          lang: "en",
          ...data,
        }
      );
    } catch (err) {
      throw err;
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <CloseIcon onClick={handleCloseModal} as={IoClose} />
        <NewJokeForm
          categories={categories}
          handleSubmitForm={handleSubmitForm}
        />
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
`;

const CloseIcon = styled.i`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
`;
