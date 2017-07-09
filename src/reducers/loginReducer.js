import actionTypes from '../actions/actionTypes';

/**
 * 
 * 
 * @export
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}:
 */
export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {
         token: action.token, 
         username: action.username,
         success: action.message
        });
    case actionTypes.LOGIN_ERROR:
      toastr.error('Invalid Credentials');
      return Object.assign({}, state, {
         error: action.message, success: null
        });
    default:
      return state;
  }
}