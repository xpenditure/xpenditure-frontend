import React, { useMemo } from 'react';
import Table from '../table/Table';
import moment from 'moment';
import Time from '../excerpt/Time';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

const ExpensesList = ({ expenses }) => {
  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Date',
      accessor: 'createdAt',
      Cell: ({ cell: { value } }) => {
        return <Time value={value} />;
      },
    },
    {
      Header: 'Amount',
      accessor: 'total',
      Cell: ({ cell: { value } }) => {
        return <span>${value.toLocaleString()}</span>;
      },
    },
    {
      Header: '',
      accessor: '_id',
      Cell: ({ cell: { value } }) => {
        return (
          <span>
            <IoEllipsisHorizontalSharp />
          </span>
        );
      },
    },
  ]);

  return <div>{expenses && <Table columns={columns} data={expenses} />}</div>;
};

export default ExpensesList;
