import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchField = ({ data }) => {
  return (
    <SearchFieldWrap>
      {data?.length === 0 ? (
        <NoResult>
          <p>Search result shows here</p>
        </NoResult>
      ) : (
        <SearchList>
          {data.map((budget) => (
            <Link to={`/dashboard/budgets/${budget._id}`} key={budget._id}>
              {budget.name}
            </Link>
          ))}
        </SearchList>
      )}
    </SearchFieldWrap>
  );
};

const SearchFieldWrap = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const SearchList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
    padding: 10px;
    color: ${(props) => props.theme.colors.text_color2};

    &:last-child {
      border: none;
    }

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }
  }
`;

const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.colors.text_color2};
`;

export default SearchField;
