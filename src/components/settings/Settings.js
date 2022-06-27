import React from 'react';
import { useDispatch } from 'react-redux';
import { setThemeMode } from '../../features/actionSlice';
import styled from 'styled-components';

const Settings = () => {
  const dispatch = useDispatch();

  const handleTheme = (mode) => {
    dispatch(setThemeMode(mode));
  };

  return (
    <SettingsWrap>
      <Overlay />
      <SettingsMain>
        <div>This is settings</div>
        <div>
          <button onClick={() => handleTheme('dark')}>Dark</button>
          <button onClick={() => handleTheme('light')}>Light</button>
        </div>
      </SettingsMain>
    </SettingsWrap>
  );
};

const SettingsWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999998;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
`;
const SettingsMain = styled.div`
  width: 900px;
  height: 600px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
`;
const Overlay = styled.div``;

export default Settings;
