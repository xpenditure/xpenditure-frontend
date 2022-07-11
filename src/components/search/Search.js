import React from 'react';
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchField from './SearchField';
import styled from 'styled-components';
import { Line } from '../../styles/DefaultStyles';

const Search = () => {
  const navigate = useNavigate();
  const close = () => {
    navigate(-1);
  };

  return (
    <Modal visible={true} close={close}>
      <SearchWrap>
        <SearchInput />
        <Line />
        <SearchField />
      </SearchWrap>
    </Modal>
  );
};

const SearchWrap = styled.div``;

export default Search;
