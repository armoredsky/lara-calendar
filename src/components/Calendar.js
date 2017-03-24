import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import { decrementMonth, incrementMonth, incrementYear, decrementYear } from '../actions/calendar'
import Week from './Week'
import Day from './Day'

const Calendar = ({dateSelected, incrementMonth, decrementMonth, incrementYear, decrementYear }) => {
  const date = moment(dateSelected);
  const title = moment(date).format("MMMM / YYYY");
  const firstDay = date.startOf('month').startOf('week');

  return (
    <div>
      <div className="calendar-header">
        <input type="button" value="<<<" onClick={decrementYear}></input>
        <input type="button" value="<" onClick={decrementMonth}></input>
        <div>{title}</div>
        <input type="button" value=">" onClick={incrementMonth}></input>
        <input type="button" value=">>>" onClick={incrementYear}></input>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <Week startDate={moment(date).add(0, 'week')} />
          <Week startDate={moment(date).add(1, 'week')} />
          <Week startDate={moment(date).add(2, 'week')} />
          <Week startDate={moment(date).add(3, 'week')} />
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dateSelected: state.calendar.selectedDate
});

const mapDispatchToProps = {
    incrementMonth,
    decrementMonth,
    incrementYear,
    decrementYear,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
