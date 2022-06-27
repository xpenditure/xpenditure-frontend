import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { TabList, TabIcon, TabItem, TabName } from './styled';
import { GearIcon } from '../icons';
import { toggleSettingsModal } from '../../features/actionSlice';
import { ArchiveIcon, ControlIcon, LabelIcon, TrashIcon } from '../icons';
import LabelList from './LabelList';

const NavTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSettings = () => {
    dispatch(toggleSettingsModal(true));
  };

  return (
    <TabList>
      {/* dashboard */}
      <TabItem
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        <TabIcon>
          <ControlIcon />
        </TabIcon>
        <TabName>Dashboard</TabName>
      </TabItem>
      {/* labels */}
      <TabItem>
        <TabIcon>
          <LabelIcon />
        </TabIcon>
        <TabName>Labels</TabName>
      </TabItem>
      <LabelList />
      {/* archive */}
      <TabItem
        onClick={() => {
          navigate('archive');
        }}
      >
        <TabIcon>
          <ArchiveIcon />
        </TabIcon>
        <TabName>Archive</TabName>
      </TabItem>
      {/* trash */}
      <TabItem
        onClick={() => {
          navigate('trash');
        }}
      >
        <TabIcon>
          <TrashIcon />
        </TabIcon>
        <TabName>Trash</TabName>
      </TabItem>
      {/* settings */}
      <TabItem onClick={handleSettings}>
        <TabIcon>
          <GearIcon />
        </TabIcon>
        <TabName>Settings</TabName>
      </TabItem>
    </TabList>
  );
};

export default NavTab;
