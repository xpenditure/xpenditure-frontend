import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CheckedIcon } from '../icons';
import { SocketContext } from '../../context/socket';
import { useDispatch, useSelector } from 'react-redux';
import { setBackground, setColor, setUserData } from '../../features/userSlice';
import { setToLS } from '../../utils/storage';
import { IoRadioButtonOff, IoRadioButtonOn } from 'react-icons/io5';

const Appearance = () => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const colors = ['#5c2b29', '#1d504b', '#2d555e', '#256141', '#468737'];

  const backgrounds = [
    { mode: 'light', name: 'Default', color: '#fff' },
    { mode: 'dim', name: 'Dim', color: '#0d1117' },
    { mode: 'amoled', name: 'Amoled', color: '#000' },
  ];

  useEffect(() => {
    socket.on('fetchUserProfile', (user) => {
      dispatch(setUserData(user));
    });
  }, []);

  const handleColor = (color) => {
    socket.emit('userColor', color);
    setToLS('accent-color', color);
    dispatch(setColor(color));
  };

  const handleBackground = (background) => {
    socket.emit('userBackground', background);
    setToLS('accent-bg', background);
    dispatch(setBackground(background));
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
      <Item>
        <div className="title">Background</div>
        <BackgroundWrap>
          {backgrounds.map((background) => (
            <Background
              key={background.color}
              color={background.color}
              onClick={() => handleBackground(background.mode)}
            >
              <div className="name">
                {background.name}
                <span>
                  {user.background === background.mode ? (
                    <IoRadioButtonOn />
                  ) : (
                    <IoRadioButtonOff />
                  )}
                </span>
              </div>
            </Background>
          ))}
        </BackgroundWrap>
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
  margin-bottom: 30px;

  .title {
    margin-bottom: 10px;
  }
`;

const ColorsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    fill: #fff;
  }

  @media (max-width: 600px) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const BackgroundWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Background = styled.div`
  width: 150px;
  background-color: ${(props) => props.color};
  height: 70px;
  margin-right: 20px;
  border-radius: ${(props) => props.theme.reset.border_radius};
  border: 2px solid ${(props) => props.theme.colors.border_color1};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color === '#fff' ? '#444' : '#c9d1d9')};
  font-weight: 600;
  cursor: pointer;

  .name {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export default Appearance;
