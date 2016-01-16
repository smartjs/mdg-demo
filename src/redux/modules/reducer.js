import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import currentUser from './currentUser';
import surveys from './surveys';

export default combineReducers({
  router: routerStateReducer,
  currentUser,
  surveys
});
