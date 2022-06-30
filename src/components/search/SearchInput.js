import React, { useState, useRef, createRef } from 'react';
import styled from 'styled-components';
import { InputWrap } from '../../styles/DefaultStyles';
import SearchField from './SearchField';
import { CancelIcon } from '../icons';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = createRef();

  return (
    <SearchInputWrap>
      <form>
        <Input focused={focused}>
          <input
            ref={inputRef}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search budgets or labels"
            type="text"
            spellCheck="false"
            autoComplete="off"
          />
        </Input>
        <SearchField visible={focused} inputRef={inputRef} />
      </form>
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
