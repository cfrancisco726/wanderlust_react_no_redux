import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import NavigationBar from '../NavigationBar';
import Auth from '../../modules/Auth';
import loginAction from '../../actions/loginActions';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'http://localhost:5000/api/sessions');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            // success

            // change the component-container state
            this.setState({
              errors: {}
            });

            const token = xhr.response.session_token;
            const username = xhr.response.name;
            Auth.authenticateUser(token)
            window.localStorage.setItem('name', username);
            const data = {token, username};
            this.props.login(data);
            browserHistory.push('/')
            console.log('The form is valid');
          } else {
            // failure
            this.props.login();
            browserHistory.push('/login')
            // change the component state
            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;

            this.setState({
              errors
            });
          }
        });
        xhr.send(formData);
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
   * Render the component.
   */
  render() {
    return (
    <div>
      <NavigationBar/>
      <LoginForm
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
    login: userDetails => dispatch(loginAction(userDetails))
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(LoginPage);
