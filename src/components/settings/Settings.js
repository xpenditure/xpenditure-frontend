import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Close from '../excerpt/Close';
import { AccountIcon, PaintbrushIcon } from '../icons';
import Modal from '../modal/Modal';
import Account from './Account';
import Appearance from './Appearance';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [title, setTtitle] = useState('Account');

  const navigate = useNavigate();

  const tabList = [
    { name: 'Account', alias: 'account', element: <AccountIcon /> },
    { name: 'Appearance', alias: 'appearance', element: <PaintbrushIcon /> },
  ];

  const handleItem = (tab) => {
    setActiveTab(tab.alias);
    setTtitle(tab.name);
  };

  const handleCloseSettingsModal = () => {
    navigate(-1);
  };

  return (
    <Modal visible={true} close={handleCloseSettingsModal}>
      <SettingsInner>
        <SettingsSide>
          <div className="tabList">
            {tabList.map((tab) => (
              <div
                className="tabItem"
                key={tab.alias}
                onClick={() => handleItem(tab)}
              >
                <div className="tabIcon">{tab.element}</div>
                <div className="tabName">{tab.name}</div>
              </div>
            ))}
          </div>
        </SettingsSide>
        <SettingsMain>
          <SettingsNav>
            <div className="title">{title}</div>
            <Close close={handleCloseSettingsModal} />
          </SettingsNav>
          <SettingsView>
            {activeTab === 'account' && <Account />}
            {activeTab === 'appearance' && <Appearance />}
          </SettingsView>
        </SettingsMain>
      </SettingsInner>
    </Modal>
  );
};

const SettingsInner = styled.div`
  width: 900px;
  max-width: 100%;
  max-height: 600px;
  display: flex;
  overflow: hidden;
  max-height: 80vh;
  height: 600px;
`;
const SettingsSide = styled.div`
  width: 200px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border_color1};
  padding: 10px 0;
  overflow-y: auto;

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
      width: 18px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }

  .tabName {
    margin-left: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_color2};
  }

  @media (max-width: 600px) {
    min-width: 50px;
    width: 50px;
    overflow: hidden;

    .tabItem {
      padding: 0;
    }
    .tabName {
      display: none;
    }

    .tabIcon {
      width: 50px;
      height: 50px;
    }
  }
`;
const SettingsMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SettingsView = styled.div`
  padding: 20px;
  overflow-y: auto;
  position: relative;
  flex: 1;
  height: 100%;
`;

const SettingsNav = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default Settings;
