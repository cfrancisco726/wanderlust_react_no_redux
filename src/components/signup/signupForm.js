import React from 'react';
import { browserHistory } from 'react-router';
import TextFieldGroup from '../common/TextFieldGroup'
import validateInput from  './validateinput'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

   isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({errors})
      debugger
      }

    return isValid
  }

  checkUserExists(e){
      const field = e.target.name;
      const val = e.target.value;
      if(val !== '') {
        this.props.isUserExists(val).then(res => {

      })
    }
  }


  onSubmit(e) {
    e.preventDefault();

    // if (this.isValid()){
      this.setState({ errors: {} })
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data })
       )

    // }
      this.props.addFlashMessage({
        type: 'success',
        text: 'you signed up successfully. Welcome!'
      })
      browserHistory.push('/')
    }

  render() {
    const { errors } = this.state
    return(
      <form onSubmit={this.onSubmit}>
        <h1> Join us! </h1>

        <TextFieldGroup
          error={errors.username}
          label="name"
          onChange={this.onChange}
          value={this.state.name}
          field='name'/>

          <TextFieldGroup
          error={errors.username}
          label="email"
          onChange={this.onChange}
          value={this.state.email}
          field='email'/>

          <TextFieldGroup
          error={errors.username}
          label="password"
          onChange={this.onChange}
          value={this.state.password}
          field='password'/>

          <TextFieldGroup
          error={errors.username}
          label="password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field='passwordConfirmation'/>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default SignupForm;
