import React from 'react';
import moment from 'moment';
import Day from './Day'
const Week = ({startDate}) => {
  return (
    <tr>
      <Day date={moment(startDate).add(0, 'day')} />
      <Day date={moment(startDate).add(1, 'day')} />
      <Day date={moment(startDate).add(2, 'day')} />
      <Day date={moment(startDate).add(3, 'day')} />
      <Day date={moment(startDate).add(4, 'day')} />
      <Day date={moment(startDate).add(5, 'day')} />
      <Day date={moment(startDate).add(6, 'day')} />
    </tr>
  )
};

export default Week;
