import React from 'react';

const FundList = ({ funds }) => {
  return (
    <div>
      {funds &&
        funds.map((item) => (
          <div key={item._id}>
            {item.narration} - ${item.total.toLocaleString()}
          </div>
        ))}
    </div>
  );
};

export default FundList;
