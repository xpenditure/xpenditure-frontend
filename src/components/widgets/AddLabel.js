import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';

const AddLabel = () => {
  const { labels } = useSelector((state) => state.budget);
  return (
    <Modal>
      <div>
        {labels.map((label) => (
          <div key={label._id}>{label.name}</div>
        ))}
      </div>
    </Modal>
  );
};

export default AddLabel;
