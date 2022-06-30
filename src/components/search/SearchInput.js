import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import { InputWrap } from '../../styles/DefaultStyles';
import SearchField from './SearchField';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = createRef();

  return (
    <>
      {focused && <Overlay onClick={() => setFocused(false)} />}
      <SearchInputWrap>
        <form>
          <Input focused={focused}>
            <input
              ref={inputRef}
              onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
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
    </>
  );
};

const SearchInputWrap = styled.div`
  position: relative;

  form {
    position: relative;
  }
`;
const Input = styled(InputWrap)`
  margin-bottom: 0;
  transition: all 300ms;
  width: ${(props) => (props.focused ? '500px' : '100%')};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0);
`;

export default SearchInput;
