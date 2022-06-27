import React from 'react';
import styled from 'styled-components';
import { TagIcon } from '../icons';
import { TabIcon, TabItem, TabName } from './styled';

const LabelList = ({ active }) => {
  const labels = [
    { name: 'Label 1' },
    { name: 'Label 2' },
    { name: 'Label 3' },
    { name: 'Label 4' },
    { name: 'Label 5' },
    { name: 'Label 6' },
    { name: 'Label 7' },
    { name: 'Label 8' },
    { name: 'Label 9' },
  ];

  return (
    <LabelWrap visible={active}>
      {labels.map((label) => (
        <TabItem key={label.name}>
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
