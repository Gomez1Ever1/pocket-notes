const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    // name check
    if (Validator.isEmpty(data.FirstName)) {
        error.name = "First name must be entered";
    }
    if (Validator.isEmpty(data.lastName)) {
        error.name = "Last name cannot be empty";
    }
    if (Validator.isEmpty(data.email)) {
        error.name = "Email must be entered";
    } else if (!Validator.isEmail(data.email)) {
        error.name = "Email is invalid";
    }
    if (Validator.isEmpty(data.username)) {
        error.name = "Username must be entered";
    }

    if (Validator.isEmpty(data.password)) {
        error.name = "Password cannot be empty";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};