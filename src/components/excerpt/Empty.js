import React from 'react';
import { ArchiveIcon, ControlIcon, LabelIcon } from '../icons';
import styled from 'styled-components';

const Empty = ({ emptyType }) => {
  const emptyJSON = [
    { type: 'budget', icon: <ControlIcon /> },
    { type: 'archive', icon: <ArchiveIcon /> },
    { type: 'label', icon: <LabelIcon /> },
  ];

  return (
    <Template>
      <div>
        <ControlIcon />
      </div>
      <p>Budget is Empty</p>
    </Template>
  );
};

const Template = styled.div``;

export default Empty;
