import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchField = () => {
  return (
    <SearchFieldWrap>
      <div>search results will show here</div>
    </SearchFieldWrap>
  );
};

const SearchFieldWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchField;
