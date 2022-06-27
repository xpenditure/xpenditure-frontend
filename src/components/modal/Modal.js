import React from 'react';
import styled from 'styled-components';

const Modal = ({ children, visible, close }) => {
  return (
    <ModalWrap visible={visible}>
      <Overlay onClick={close} />
      <ModalInner>{children}</ModalInner>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999998;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;
const ModalInner = styled.div`
  position: relative;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
`;

export default Modal;
