import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TagIcon } from '../icons';
import { TabIcon, TabItem, TabName } from './styled';
import { SocketContext } from '../../context/socket';

const LabelList = ({ active }) => {
  const socket = useContext(SocketContext);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchLabels');
      socket.on('fetchLabels', (data) => setLabels(data));
    };
  });

  return (
    <LabelWrap visible={active}>
      {labels.map((label) => (
        <TabItem key={label._id}>
          <TabIcon>
            <TagIcon />
          </TabIcon>
          <TabName>{label.name}</TabName>
        </TabItem>
      ))}
    </LabelWrap>
  );
};

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.border_color1};
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
  max-height: ${(props) => (props.visible ? '250px' : '0')};
  overflow: auto;
  border-width: ${(props) => (props.visible ? '1px' : '0')};
  transition: all 300ms ease-in-out;
`;

export default LabelList;
