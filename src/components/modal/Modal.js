import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = ({ children, visible, close }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <ModalWrap visible={visible}>
      <Overlay onClick={close} />
      <ModalInner active={active}>{children}</ModalInner>
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
  align-items: flex-start;
  padding: 0 20px 20px 20px;
`;
const ModalInner = styled.div`
  margin-top: ${(props) => (props.active ? '60px' : '200px')};
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  box-shadow: ${(props) => props.theme.colors.shadow1};
  max-width: 100%;
  overflow: hidden;
  transition: all 300ms;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
