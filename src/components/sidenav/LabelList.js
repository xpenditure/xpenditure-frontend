import React from 'react';
import styled from 'styled-components';
import { TagIcon } from '../icons';
import { TabIcon, TabItem, TabName } from './styled';

const LabelList = () => {
  const labels = [
    { name: 'Label 1' },
    { name: 'Label 2' },
    { name: 'Label 3' },
  ];

  return (
    <LabelWrap>
      {labels.map((label) => (
        <TabItem>
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
  padding: 5px 0;
  border-top: 1px solid ${(props) => props.theme.colors.border_color1};
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
`;

export default LabelList;
