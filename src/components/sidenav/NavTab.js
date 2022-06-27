import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { TabList, TabIcon, TabItem, TabName } from './styled';
import { GearIcon } from '../icons';

const NavTab = ({ views }) => {
  const navigate = useNavigate();
  const { activeView } = useSelector((state) => state.action);

  return (
    <TabList>
      {views.map((view) => {
        return (
          <TabItem
            key={view.alias}
            active={activeView === view.alias}
            onClick={() => {
              navigate(`/dashboard?view=${view.alias}`);
            }}
          >
            <TabIcon>{view.element}</TabIcon>
            <TabName>{view.name}</TabName>
          </TabItem>
        );
      })}
      <TabItem>
        <TabIcon>
          <GearIcon />
        </TabIcon>
        <TabName>Settings</TabName>
      </TabItem>
    </TabList>
  );
};

export default NavTab;
