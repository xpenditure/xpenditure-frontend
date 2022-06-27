import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logout from './Logout';
import NavTab from './NavTab';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDashboardView } from '../../features/actionSlice';
import { ArchiveIcon, ControlIcon, LabelIcon, TrashIcon } from '../icons';

const Sidenav = () => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view');
  const dispatch = useDispatch();

  const viewList = [
    { name: 'Budgets', alias: 'budgets', element: <ControlIcon /> },
    { name: 'Labels', alias: 'labels', element: <LabelIcon /> },
    { name: 'Archive', alias: 'trash', element: <ArchiveIcon /> },
    { name: 'Trash', alias: 'trash', element: <TrashIcon /> },
  ];

  useEffect(() => {
    if (view) {
      viewList.map((item) => {
        if (item.alias === view.toLowerCase()) {
          dispatch(setDashboardView(item.alias));
          return;
        }
      });
    }
  }, [view]);

  return (
    <SidenavWrap>
      <SidenavInner>
        <NavTab views={viewList} />
        <Logout />
      </SidenavInner>
    </SidenavWrap>
  );
};

const SidenavWrap = styled.div`
  display: flex;
  height: 100vh;
  width: 250px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const SidenavInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

export default Sidenav;
