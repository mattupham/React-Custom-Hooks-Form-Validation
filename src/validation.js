// This dependency will be injected in to the useForm custom hook,
// so, it's up to you to arbitrarily define fields and corresponding
// validations for those fields (e.g. you could simply add a 'Remember Me'
// field and validation if you wish to).
// Precondition: Your fields must use same name e.g. name="password"
export const fields = [
  'email',
  'password',
  'telephone',
];

// Add your validation logic here. It should correspond with a field in fields
export const validate = (values) => {
  let errors = {};

  // Email
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be more than 10 characters";
  }

  var telRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!values.telephone) {
    errors.telephone = "Telephone is required";
  } else if (!telRegex.test(values.telephone)) {
    errors.telephone = "Telephone is invalid";
  }

  return errors;
}
