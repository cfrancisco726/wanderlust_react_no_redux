import React from 'react'
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
// import { userSignupRequest, isUserExists } from '../../actions/SignupActions';
// import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
  render() {
      const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
        <SignupForm userSignupRequest={userSignupRequest} isUserExists={isUserExists} addFlashMessage={addFlashMessage} />
        </div>
      </div>

      )
  }
}

SignupPage.propTypes = {
  // userSignupRequest: React.PropTypes.func.isRequired,
  // addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired

}

export default SignupPage