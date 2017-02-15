import { CONSTANTS } from '../constants';

const loginSuccess = userName => {
    return { type: CONSTANTS.ACTION_TYPES.LOGIN_SUCCESS, payload: userName };
};

export const login = userName => dispatch => {
    dispatch(loginSuccess(userName));
};