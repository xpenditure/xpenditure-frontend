import React, { useEffect, useMemo, useState } from 'react';
import Table from '../table/Table';
import Time from '../excerpt/Time';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import More from '../widgets/More';
import NoTransaction from '../transaction/NoTransaction';

const ExpensesList = ({ expenses }) => {
  const [id, setId] = useState('');

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
          <div className="icon" onClick={() => setId(value)}>
            <IoEllipsisHorizontalSharp />
            {id === value && (
              <More close={() => setId('')} visible={true}>
                <div className="link">
                  <p>View expenses</p>
                  <p>Delete</p>
                </div>
              </More>
            )}
          </div>
        );
      },
    },
  ]);

  return (
    <div>
      {expenses?.length > 0 && <Table columns={columns} data={expenses} />}
      {!expenses?.length && <NoTransaction />}
    </div>
  );
};

export default ExpensesList;
