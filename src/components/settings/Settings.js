import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleSettingsModal } from '../../features/actionSlice';
import Close from '../excerpt/Close';
import { AccountIcon, BellIcon, CancelIcon, PaintbrushIcon } from '../icons';
import Modal from '../modal/Modal';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [title, setTtitle] = useState('Account');

  const dispatch = useDispatch();

  const { settingsModal } = useSelector((state) => state.action);

  const tabList = [
    { name: 'Account', alias: 'account', element: <AccountIcon /> },
    { name: 'Appearance', alias: 'appearance', element: <PaintbrushIcon /> },
    { name: 'Notifications', alias: 'notifications', element: <BellIcon /> },
  ];

  const handleItem = (tab) => {
    setActiveTab(tab.alias);
    setTtitle(tab.name);
  };

  const handleCloseSettingsModal = () => {
    dispatch(toggleSettingsModal(false));
  };

  return (
    <Modal visible={settingsModal} close={handleCloseSettingsModal}>
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
            {activeTab === 'account' && 'Account'}
            {activeTab === 'appearance' && 'Appearance'}
            {activeTab === 'notifications' && 'Notifications'}
          </SettingsView>
        </SettingsMain>
      </SettingsInner>
    </Modal>
  );
};

const SettingsInner = styled.div`
  width: 900px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
`;
const SettingsSide = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border_color1};
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

const SettingsView = styled.div`
  padding: 20px;
  overflow-y: auto;
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
