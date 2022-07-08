import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TabList, TabIcon, TabItem, TabName } from './styled';
import { BellIcon, GearIcon } from '../icons';
import { ArchiveIcon, ControlIcon, LabelIcon } from '../icons';
import LabelList from './LabelList';

const NavTab = ({ active }) => {
  const location = useLocation();

  const [label, setLabel] = useState(false);

  const handleToggleLabel = () => {
    setLabel(!label);
  };

  return (
    <TabList active={active}>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        <TabItem>
          <TabIcon className="active-icon">
            <ControlIcon />
          </TabIcon>
          <TabName>Budgets</TabName>
        </TabItem>
      </NavLink>
      <NavLink
        to="archive"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        <TabItem>
          <TabIcon className="active-icon">
            <ArchiveIcon />
          </TabIcon>
          <TabName>Archive</TabName>
        </TabItem>
      </NavLink>

      <NavLink
        to="notifications"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        <TabItem>
          <TabIcon className="active-icon">
            <BellIcon />
          </TabIcon>
          <TabName>Notifications</TabName>
        </TabItem>
      </NavLink>

      <div className="custom">
        <TabItem onClick={handleToggleLabel}>
          <TabIcon className="active-icon">
            <LabelIcon />
          </TabIcon>
          <TabName>Labels</TabName>
        </TabItem>
      </div>

      <LabelList active={label} />
      <NavLink
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
        to="/dashboard/settings"
        state={{ background: location }}
      >
        <TabItem>
          <TabIcon className="active-icon">
            <GearIcon />
          </TabIcon>
          <TabName>Settings</TabName>
        </TabItem>
      </NavLink>
    </TabList>
  );
};

export default NavTab;
