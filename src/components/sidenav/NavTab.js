import React, { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { TabList, TabIcon, TabItem, TabName, OLS } from './styled';
import { BellIcon, CaretDownIcon, GearIcon, PlusIcon } from '../icons';
import { ArchiveIcon, ControlIcon, LabelIcon } from '../icons';
import LabelList from './LabelList';
import { ButtonPrimary } from '../../styles/DefaultStyles';

const NavTab = () => {
  const location = useLocation();

  const [label, setLabel] = useState(false);

  const handleToggleLabel = () => {
    setLabel(!label);
  };

  return (
    <TabList>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        <TabItem>
          <TabIcon>
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
          <TabIcon>
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
          <TabIcon>
            <BellIcon />
          </TabIcon>
          <TabName>Notifications</TabName>
        </TabItem>
      </NavLink>
      <div className="custom" to="#">
        <TabItem onClick={handleToggleLabel}>
          <OLS>
            <div className="tabitem">
              <TabIcon>
                <LabelIcon />
              </TabIcon>
              <TabName>Labels</TabName>
              <div className="icon">
                <CaretDownIcon />
              </div>
            </div>
            <Link
              to="/dashboard/new/label"
              state={{ background: location }}
              onClick={(e) => e.stopPropagation()}
            >
              <ButtonPrimary>New</ButtonPrimary>
            </Link>
          </OLS>
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
          <TabIcon>
            <GearIcon />
          </TabIcon>
          <TabName>Settings</TabName>
        </TabItem>
      </NavLink>
    </TabList>
  );
};

export default NavTab;
