const LOAD_SURVEYS = 'mdg/surveys/LOAD_SURVEYS';
const LOAD_SURVEYS_SUCCESS = 'mdg/surveys/LOAD_SURVEYS_SUCCESS';
const LOAD_SURVEYS_FAIL = 'mdg/surveys/LOAD_SURVEYS_FAIL';

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_SURVEYS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SURVEYS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.result,
      };
    }
    case LOAD_SURVEYS_FAIL: {
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

export function load() {
  return {
    types: [LOAD_SURVEYS, LOAD_SURVEYS_SUCCESS, LOAD_SURVEYS_FAIL],
    promise: (client) => client.get('/surveys')
  };
}
