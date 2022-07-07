import React from 'react';

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      {expenses &&
        expenses.map((item) => (
          <div key={item._id}>
            {item.name} - ${item.total.toLocaleString()}
          </div>
        ))}
    </div>
  );
};

export default ExpensesList;
