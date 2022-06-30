import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { EllipsisVerticalIcon, TagIcon } from '../icons';
import { TabIcon, TabItem, TabName, OLS } from './styled';
import { SocketContext } from '../../context/socket';
import { Link } from 'react-router-dom';

const LabelList = ({ active }) => {
  const socket = useContext(SocketContext);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchLabels');
      socket.on('fetchLabels', (data) => setLabels(data));
    };
  });

  const handleLabelClick = (label) => {
    console.log(label.name);
  };

  return (
    <LabelWrap visible={active}>
      {labels.map((label) => (
        <Link to="#" key={label._id}>
          <TabItem>
            <OLS>
              <div className="tabitem">
                <TabIcon>
                  <TagIcon />
                </TabIcon>
                <TabName>{label.name}</TabName>
              </div>
              <div
                className="more-icon"
                onClick={() => handleLabelClick(label)}
              >
                <EllipsisVerticalIcon />
              </div>
            </OLS>
          </TabItem>
        </Link>
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
  overflow-y: ${(props) => (props.visible ? 'auto' : 'hidden')};
  border-width: ${(props) => (props.visible ? '1px' : '0')};
  transition: all 300ms ease-in-out;
`;

export default LabelList;
