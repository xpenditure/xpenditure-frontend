import moment from 'moment';

const Time = ({ value }) => {
  return <span>{moment(value).format('MMM D, YYYY HH:mm')}</span>;
};

export default Time;
