import axios from 'axios';
import actionTypes from './actionTypes';

export default (response) => {

    const token = response.token;
    localStorage.setItem('token', token);
    if(response.token){
     return({
        type: actionTypes.LOGIN_SUCCESSFUL,
        username:response.username,
        token: response.token,
        message: 'Login Successful'
      });
    } else {
      return({
        type: actionTypes.LOGIN_ERROR,
        message: 'Invalid credentials'
      });
    }
};