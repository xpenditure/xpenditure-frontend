import React from 'react';
import styled from 'styled-components';
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from 'react-icons/bs';

const TableControls = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}) => {
  return (
    <ControlWrap>
      <div className="pagination">
        <div className="pagination-btn">
          <button
            onClick={() => gotoPage(0)}
            className={!canPreviousPage ? 'disabled' : ''}
            disabled={!canPreviousPage}
          >
            <BsChevronDoubleLeft />
          </button>
          <button
            onClick={() => previousPage()}
            className={!canPreviousPage ? 'disabled' : ''}
            disabled={!canPreviousPage}
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={() => nextPage()}
            className={!canNextPage ? 'disabled' : ''}
            disabled={!canNextPage}
          >
            <BsChevronRight />
          </button>
          <button
            className={!canNextPage ? 'disabled' : ''}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <BsChevronDoubleRight />
          </button>
        </div>
        <span className="page-length">
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
          Results
        </span>
      </div>
    </ControlWrap>
  );
};

const ControlWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 40px;

  .pagination {
    display: flex;
    align-items: center;
  }

  .pagination-btn {
    display: flex;
    margin-right: 20px;

    button {
      padding: 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
      outline: none;
      margin: 0 5px;
      border-radius: ${(props) => props.theme.reset.border_radius};
    }
  }
`;

export default TableControls;
