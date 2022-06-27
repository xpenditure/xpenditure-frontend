import React from 'react';
import styled from 'styled-components';
import { CancelIcon } from '../icons';

const Close = ({ close }) => {
  return (
    <CloseWrap onClick={close}>
      <CancelIcon />
    </CloseWrap>
  );
};

const CloseWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.hover_color1};
  }
  svg {
    fill: ${(props) => props.theme.colors.text_color_default};
    width: 20px;
  }
`;

export default Close;
