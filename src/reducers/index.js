import { combineReducers } from 'redux';
import { CONSTANTS } from '../constants';

const createReducer = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];

  return reducer
    ? reducer(state, action.payload)
    : state;
};

const initialState = {
  userName: ''
};

const reducers = createReducer(initialState, {
  [CONSTANTS.ACTION_TYPES.LOGIN_SUCCESS]: (state, payload) => {
    return {
      userName: payload
    };
  }
});

const rootReducer = combineReducers({ reducers });

export default rootReducer;
