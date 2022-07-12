import React, { useMemo } from 'react';
import Table from '../table/Table';
import Time from '../excerpt/Time';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import NoTransaction from '../transaction/NoTransaction';

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
      {funds?.length > 0 && <Table columns={columns} data={funds} />}
      {!funds?.length && <NoTransaction />}
    </div>
  );
};

export default FundList;
