import React from 'react';
import styled from 'styled-components';
import { Line, Title } from '../../styles/DefaultStyles';
import { CheckedIcon } from '../icons';

const Appearance = () => {
  const colors = [
    '#5c2b29',
    '#614919',
    '#5b2245',
    '#1e3a57',
    '#442f19',
    '#1d504b',
    '#2d555e',
    '#256141',
  ];

  return (
    <AppearanceWrap>
      <Item>
        <div className="title">Colors</div>
        <ColorsWrap>
          {colors.map((color) => (
            <Color className="color" key={color} color={color}>
              <CheckedIcon />
            </Color>
          ))}
        </ColorsWrap>
      </Item>
    </AppearanceWrap>
  );
};

const AppearanceWrap = styled.div`
  color: ${(props) => props.theme.colors.text_color2};
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 10px;
  }
`;

const ColorsWrap = styled.div`
  display: flex;
`;

const Color = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  svg {
    width: 14px;
    fill: ${(props) => props.theme.colors.text_color2};
  }
`;

export default Appearance;
