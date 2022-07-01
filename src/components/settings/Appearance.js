import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CheckedIcon } from '../icons';
import { SocketContext } from '../../context/socket';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../features/userSlice';

const Appearance = () => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const colors = [
    '#5c2b29',
    '#614919',
    '#5b2245',
    '#1e3a57',
    '#442f19',
    '#1d504b',
    '#2d555e',
    '#256141',
    '#468737',
  ];

  useEffect(() => {
    return () => {
      socket.on('fetchUserProfile', (user) => {
        dispatch(setUserData(user));
      });
    };
  }, []);

  const handleColor = (color) => {
    socket.emit('userColor', color);
  };

  return (
    <AppearanceWrap>
      <Item>
        <div className="title">Colors</div>
        <ColorsWrap>
          {colors.map((color) => (
            <Color
              className="color"
              key={color}
              color={color}
              onClick={() => handleColor(color)}
            >
              {user.color === color && <CheckedIcon />}
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
