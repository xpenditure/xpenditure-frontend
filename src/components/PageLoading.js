import React from 'react';
import styled from 'styled-components';

const PageLoading = () => {
  return <Wrap>Loading...</Wrap>;
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PageLoading;
