import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchField = ({ visible }) => {
  return (
    <SearchFieldWrap visible={visible}>
      <div>search results will show here</div>
    </SearchFieldWrap>
  );
};

const SearchFieldWrap = styled.div`
  position: absolute;
  width: ${(props) => (props.visible ? '500px' : '100%')};
  max-height: 400px;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-top: none;
  transition: 300ms all;
  border-bottom-left-radius: ${(props) => props.theme.reset.border_radius};
  border-bottom-right-radius: ${(props) => props.theme.reset.border_radius};
  box-shadow: ${(props) => props.theme.colors.shadow1};
  background-color: ${(props) => props.theme.colors.primary};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};

  div {
    padding: 30px;
  }
`;

export default SearchField;
