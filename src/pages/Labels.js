import React from 'react';
import { useParams } from 'react-router-dom';

const Labels = () => {
  const { alias } = useParams();

  return (
    <div>
      <div>This is labels</div>
    </div>
  );
};

export default Labels;
