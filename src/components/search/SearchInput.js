import React, { useState } from 'react';
import styled from 'styled-components';
import { InputWrap } from '../../styles/DefaultStyles';
import SearchField from './SearchField';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <SearchInputWrap>
      <form>
        <Input focused={focused}>
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search budgets or labels"
            type="text"
          />
        </Input>
      </form>
      <SearchField visible={focused} />
    </SearchInputWrap>
  );
};

const SearchInputWrap = styled.div`
  position: relative;
`;
const Input = styled(InputWrap)`
  margin-bottom: 0;
  transition: all 300ms;
  width: ${(props) => (props.focused ? '500px' : '100%')};
`;

export default SearchInput;
