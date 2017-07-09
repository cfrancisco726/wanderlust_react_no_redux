import axios from 'axios';
import actionTypes from './actionTypes';

export default (response) => {
    if (response.token){
      return ({
        type: actionTypes.SIGN_UP_SUCCESSFUL,
        username: response.username,
        token: response.token,
        message: 'Sign up Successful'
    });
} else {
    return ({
        type: actionTypes.SIGN_UP_ERROR,
        message: 'Invalid credentials'
    });
}

};