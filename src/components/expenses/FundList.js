import React from 'react';

const FundList = ({ funds, budget }) => {
  return (
    <div>
      <div>
        {'Initial fund' || budget?.name} - ${budget?.total.toLocaleString()}
      </div>
      {funds &&
        funds.map((item) => (
          <div key={item._id}>
            {item?.narration} - ${item?.total.toLocaleString()}
          </div>
        ))}
    </div>
  );
};

export default FundList;
