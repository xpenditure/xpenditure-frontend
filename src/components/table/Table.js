import React from 'react';
import { useTable, usePagination } from 'react-table';
import styled from 'styled-components';
import TableControls from './TableControls';
import { Line } from '../../styles/DefaultStyles';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <TableWrap>
      <TableMain>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableMain>
      <Line />
      <TableControls
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </TableWrap>
  );
};
const TableMain = styled.div`
  padding: 20px;
`;
const TableWrap = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.text_color2};

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(even) {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: left;

      :last-child {
        border-right: 0;
        text-align: right;
      }
    }

    thead {
      font-size: 14px;
    }

    tbody {
      font-size: 14px;
    }
  }

  .icon {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${(props) => props.theme.colors.text_color2};
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }
  }
`;

export default Table;
