import { LOGIN_SUCCESS } from 'redux/modules/currentUser';

export default () => next => action => {
  if (action.type === LOGIN_SUCCESS && __CLIENT__) {
    document.cookie = `token=${action.result.token}; path='/'`;
  }

  return next(action);
};
