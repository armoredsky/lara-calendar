import React from 'react';
import { connect } from 'react-redux';
import { getWorked, getEarned } from '../reducers/calendar'
import {updateWorked, updateEarned } from '../actions/calendar'
import moment from 'moment';

const Day = ({date, worked, earned, updateWorked, updateEarned}) => {
  return (
    <td>
      <div>{moment(date).format("D")}</div>
      <input value={worked} onChange={e => updateWorked(e.target.value, moment(date))} />
      <input value={earned} onChange={e => updateEarned(e.target.value, moment(date))} />
    </td>
  )
};

const mapStateToProps = (state, ownProps) => ({
  date: ownProps.date,
  worked: getWorked(state, ownProps.date),
  earned: getEarned(state, ownProps.date),
});

const mapDispatchToProps = {
    updateWorked,
    updateEarned,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
