const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function adminValidateRegister(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Name is Required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "email is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Enter a valid email";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (!validator.isLength(data.password, { min: 8, max: 15 })) {
    errors.password = "Password must have at least 8 charachers";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "You must confirm password";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Confirm password must match password";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
