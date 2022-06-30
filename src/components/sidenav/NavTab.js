import React, { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { TabList, TabIcon, TabItem, TabName, OLS } from './styled';
import { GearIcon, PlusIcon } from '../icons';
import { ArchiveIcon, ControlIcon, LabelIcon, TrashIcon } from '../icons';
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

      <div className="custom" to="#">
        <TabItem onClick={handleToggleLabel}>
          <OLS>
            <div className="tabitem">
              <TabIcon>
                <LabelIcon />
              </TabIcon>
              <TabName>Labels</TabName>
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
        to="trash"
        end
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' activated' : '')
        }
      >
        <TabItem>
          <TabIcon>
            <TrashIcon />
          </TabIcon>
          <TabName>Trash</TabName>
        </TabItem>
      </NavLink>

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
