const LOGIN = 'mdg/currentUser/LOGIN';
const LOGIN_SUCCESS = 'mdg/currentUser/LOGIN_SUCCESS';
const LOGIN_FAIL = 'mdg/currentUser/LOGIN_FAIL';

const initialState = {
  token: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.result.token,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export function login({ username, password}) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: { username, password }
    }),
  };
}
