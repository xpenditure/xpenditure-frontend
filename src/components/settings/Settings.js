import React from 'react';
import { useDispatch } from 'react-redux';
import { setThemeMode } from '../../features/actionSlice';
import styled from 'styled-components';
import { AccountIcon, BellIcon, CancelIcon, PaintbrushIcon } from '../icons';

const Settings = () => {
  const dispatch = useDispatch();

  const tabList = [
    { name: 'Account', alias: 'account', element: <AccountIcon /> },
    { name: 'Appearance', alias: 'appearance', element: <PaintbrushIcon /> },
    { name: 'Notification', alias: 'notification', element: <BellIcon /> },
  ];

  const handleTheme = (mode) => {
    dispatch(setThemeMode(mode));
  };

  return (
    <SettingsWrap>
      <Overlay />
      <SettingsInner>
        <SettingsSide>
          <div className="tabList">
            {tabList.map((tab) => (
              <div className="tabItem" key={tab.alias}>
                <div className="tabIcon">{tab.element}</div>
                <div className="tabName">{tab.name}</div>
              </div>
            ))}
          </div>
        </SettingsSide>
        <SettingsMain>
          <SettingsNav>
            <div className="title">Tab Title</div>
            <div className="close">
              <CancelIcon />
            </div>
          </SettingsNav>
          <div>This is settings</div>
          <div>
            <button onClick={() => handleTheme('dark')}>Dark</button>
            <button onClick={() => handleTheme('light')}>Light</button>
          </div>
        </SettingsMain>
      </SettingsInner>
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
const SettingsInner = styled.div`
  width: 900px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  display: flex;
`;
const SettingsSide = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 10px 0;

  .tabList {
    display: flex;
    flex-direction: column;
  }

  .tabItem {
    display: flex;
    padding: 8px 15px;
    align-items: center;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }
  }

  .tabIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }

  .tabName {
    margin-left: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_color2};
  }
`;
const SettingsMain = styled.div`
  flex: 1;
`;

const SettingsNav = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: ${(props) => props.theme.colors.text_color_default};
      width: 20px;
    }
  }
`;

const Overlay = styled.div``;

export default Settings;
