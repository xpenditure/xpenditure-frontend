import moment from 'moment';

const Time = ({ value }) => {
  return <span>{moment(value).format('MMMM d, YYYY HH:mm')}</span>;
};

export default Time;
