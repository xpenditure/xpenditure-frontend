import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TabList, TabIcon, TabItem, TabName } from './styled';
import { GearIcon, SearchIcon } from '../icons';
import { ArchiveIcon, ControlIcon, LabelIcon, CaretDownIcon } from '../icons';
import LabelList from './LabelList';
import { IconLg } from '../../styles/DefaultStyles';
import { useDispatch } from 'react-redux';
import { toggleSideNav } from '../../features/actionSlice';

const NavTab = ({ active }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [label, setLabel] = useState(false);

  const handleToggleLabel = () => {
    setLabel(!label);
    closeSideNav();
  };

  const closeSideNav = () => {
    dispatch(toggleSideNav(false));
  };

  return (
    <TabList active={active}>
      <NavLink
        to="search"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
        state={{ background: location }}
      >
        <TabItem onClick={closeSideNav}>
          <TabIcon className="active-icon">
            <SearchIcon />
          </TabIcon>
          <TabName>Search</TabName>
        </TabItem>
      </NavLink>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
        onClick={closeSideNav}
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
        onClick={closeSideNav}
      >
        <TabItem>
          <TabIcon className="active-icon">
            <ArchiveIcon />
          </TabIcon>
          <TabName>Archive</TabName>
        </TabItem>
      </NavLink>
      <div className="custom">
        <TabItem onClick={handleToggleLabel}>
          <TabIcon className="active-icon">
            <LabelIcon />
          </TabIcon>
          <TabName>
            Labels
            <IconLg>
              <CaretDownIcon />
            </IconLg>
          </TabName>
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
        onClick={closeSideNav}
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
