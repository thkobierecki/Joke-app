import styled from "styled-components";

const Modal = () => {
  return (
    <ModalContainer>
      <ModalWrapper>hi</ModalWrapper>
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
`;

const ModalWrapper = styled.div`
  width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
`;
