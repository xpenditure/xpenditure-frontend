import React from 'react';
import styled from 'styled-components';

const NoTransaction = () => {
  return (
    <Wrap>
      <p>No Transaction</p>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${(props) => props.theme.colors.text_color2};
  opacity: 0.5;
`;

export default NoTransaction;
