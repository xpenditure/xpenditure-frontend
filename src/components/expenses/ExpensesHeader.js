import React, { useState } from 'react';
import AddExpenses from '../widgets/AddExpenses';

const ExpensesHeader = () => {
  const [active, setActive] = useState(false);

  const close = () => {
    setActive(false);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={() => setActive(true)}>New expenses</button>
        </div>
      </div>
      {active && <AddExpenses close={close} />}
    </>
  );
};

export default ExpensesHeader;
