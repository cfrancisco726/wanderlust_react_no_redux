import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import SignUpForm from './SignUpForm';
import Auth from '../../modules/Auth';
import NavigationBar from '../NavigationBar';
import signUpAction from '../../actions/signUpActions';



class SignUpPage extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
  
    event.preventDefault();
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:5000/api/users');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {

    if (xhr.status === 200) {

      this.setState({
        errors: {}
      });
     
      const token = xhr.response.session_token;
      const username = xhr.response.name;
      Auth.authenticateUser(token)
      window.localStorage.setItem('name', username);
       const data = {token, username};
       this.props.signup(data);
        browserHistory.push('/')

      } else {
      // failure

      const errors = xhr.response.errors ? xhr.response.errors : {};
      errors.summary = xhr.response.message;
      this.props.signup();
      this.setState({
        errors
      });
      }
      });
      xhr.send(formData);
    }

  render() {
    return (
    <div>
      <NavigationBar/>
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    </div>
    );
  }

}

const mapStoreToProps = (state) => {
  return {
    // signUpSuccess: state.signUpReducer.success,
    // signUpError: state.signUpReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: userDetails => dispatch(signUpAction(userDetails))
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(SignUpPage);
