import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import calendar from './calendar';

const rootReducer = combineReducers({
  routing: routerReducer,
  calendar,
});

export default rootReducer;
