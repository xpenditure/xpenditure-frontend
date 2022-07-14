import React, { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchField from './SearchField';
import styled from 'styled-components';
import { Line } from '../../styles/DefaultStyles';
import { useSelector } from 'react-redux';

const Search = () => {
  const [search, setSearch] = useState('');
  const [filterRes, setFilterRes] = useState([]);
  const { budgets } = useSelector((state) => state.budget);

  const navigate = useNavigate();
  const close = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (search) {
      let result;
      result = budgets.filter((budget) =>
        budget.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterRes(result);
    } else {
      setFilterRes([]);
    }
  }, [search]);

  return (
    <Modal visible={true} close={close}>
      <SearchWrap>
        <SearchInput search={search} setSearch={setSearch} />
        <Line />
        <SearchField data={filterRes} />
      </SearchWrap>
    </Modal>
  );
};

const SearchWrap = styled.div``;

export default Search;
