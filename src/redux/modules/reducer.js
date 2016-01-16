import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import currentUser from './currentUser';

export default combineReducers({
  router: routerStateReducer,
  currentUser
});
