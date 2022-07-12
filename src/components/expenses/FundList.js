import React, { useMemo } from 'react';
import Table from '../table/Table';
import Time from '../excerpt/Time';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

const FundList = ({ funds, budget }) => {
  const columns = useMemo(() => [
    {
      Header: 'Narration',
      accessor: 'narration',
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
  return (
    <div>
      {funds && (
        <div>
          <Table columns={columns} data={funds} />
        </div>
      )}
    </div>
  );
};

export default FundList;
