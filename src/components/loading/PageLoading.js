import React from 'react';
import styled from 'styled-components';

const PageLoading = () => {
  return (
    <Wrap>
      <div>Loading... Please wait</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  div {
    margin-top: 100px;
    color: ${(props) => props.theme.colors.text_color2};
  }
`;

export default PageLoading;
