import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline, IoCloseCircle } from 'react-icons/io5';

const SearchInput = ({ search, setSearch }) => {
  return (
    <SearchInputWrap>
      <form>
        <Input>
          <i>
            <IoSearchOutline />
          </i>
          <input
            autoFocus={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search budgets or labels"
            type="text"
            spellCheck="false"
            autoComplete="off"
          />

          <i className={search ? 'close' : 'close hidden'}>
            <IoCloseCircle onClick={() => setSearch('')} />
          </i>
        </Input>
      </form>
    </SearchInputWrap>
  );
};

const SearchInputWrap = styled.div`
  position: relative;

  form {
    position: relative;
  }

  .hidden {
    opacity: 0;
    visibility: hidden;
  }

  .close {
    cursor: pointer;
  }
`;

const Input = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  input {
    width: 400px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    outline: none;
    flex: 1;
    color: ${(props) => props.theme.colors.text_color2};
    font-size: 14px;
  }

  i {
    font-size: 20px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SearchInput;
