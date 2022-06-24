import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../styles/DefaultStyles';

const Modal = ({ children, visible, close }) => {
  return (
    <ModalWrap visible={visible}>
      <Overlay onClick={close} />
      <ModalInner>{children}</ModalInner>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  padding: 0 20px;
`;
const ModalInner = styled.div`
  background-color: #fff;
  position: relative;
  width: 500px;
  max-width: 100%;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

export default Modal;
