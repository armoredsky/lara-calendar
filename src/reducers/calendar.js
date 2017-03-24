import {types} from '../actions/calendar'
import moment from 'moment';
const key = (date) => {return moment(date).format('MM/DD/YYYY');};
const defaultState = {
  selectedDate: moment(),
  entries: {},
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.UPDATE_SELECTED_DATE: {
      return {
        ...state,
        selectedDate: moment(state.selectedDate).add(action.value, action.increment),
      }
    }
    case types.UPDATE_WORKED: {
      return {
        ...state,
        entries:{
          ...state.entries,
          [key(action.date)]: {
            ...state.entries[key(action.date)],
            worked: action.worked,
          }
        }
      };
    }
    case types.UPDATE_EARNED: {
      return {
        ...state,
        entries:{
          ...state.entries,
          [key(action.date)]: {
            ...state.entries[key(action.date)],
            earned: action.earned,
          }
        }
      };
    }
    default:
      return state;
  }
}

export const getWorked = (state, date) => {
  const entry = state.calendar.entries[key(date)];
  return entry ? entry.worked : "X";
};

export const getEarned = (state, date) => {
  const entry = state.calendar.entries[key(date)];
  return entry ? entry.earned : "0";
};
