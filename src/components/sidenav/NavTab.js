import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { TabList, TabIcon, TabItem, TabName } from './styled';
import { GearIcon, PlusIcon } from '../icons';
import {
  toggleLabelModal,
  toggleSettingsModal,
} from '../../features/actionSlice';
import { ArchiveIcon, ControlIcon, LabelIcon, TrashIcon } from '../icons';
import LabelList from './LabelList';
import styled from 'styled-components';

const NavTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [label, setLabel] = useState(false);

  const handleSettings = () => {
    dispatch(toggleSettingsModal(true));
  };

  const handleToggleLabel = () => {
    setLabel(!label);
  };

  const handleAddLabel = (e) => {
    e.stopPropagation();
    dispatch(toggleLabelModal(true));
  };

  return (
    <TabList>
      <Link to="/dashboard">
        <TabItem>
          <TabIcon>
            <ControlIcon />
          </TabIcon>
          <TabName>Budgets</TabName>
        </TabItem>
      </Link>

      <TabItem onClick={handleToggleLabel}>
        <OLS>
          <div className="tabitem">
            <TabIcon>
              <LabelIcon />
            </TabIcon>
            <TabName>Labels</TabName>
          </div>
          <div className="add-label" onClick={handleAddLabel}>
            <PlusIcon />
          </div>
        </OLS>
      </TabItem>
      <LabelList active={label} />

      <Link to="archive">
        <TabItem>
          <TabIcon>
            <ArchiveIcon />
          </TabIcon>
          <TabName>Archive</TabName>
        </TabItem>
      </Link>

      <Link to="trash">
        <TabItem>
          <TabIcon>
            <TrashIcon />
          </TabIcon>
          <TabName>Trash</TabName>
        </TabItem>
      </Link>

      <TabItem onClick={handleSettings}>
        <TabIcon>
          <GearIcon />
        </TabIcon>
        <TabName>Settings</TabName>
      </TabItem>
    </TabList>
  );
};

const OLS = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  .tabitem {
    display: flex;
  }

  .add-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;

    :hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    svg {
      width: 13px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

export default NavTab;
