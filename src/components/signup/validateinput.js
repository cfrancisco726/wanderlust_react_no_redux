import Validator from 'validator';

export default function validateInput(data) {
  let errors = {}

  if (Validator.isEmpty(data.name)){
    errors.name = 'This field is required';
  }
  if (Validator.isEmpty(data.email)){
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)){
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'This field is required';
  }
  if (!Validator.isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'password must match';
  }

}
