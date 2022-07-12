import moment from 'moment';

const Time = ({ value }) => {
  return <span>{moment(value).format('DD-MM-YY hh:mm A')}</span>;
};

export default Time;
