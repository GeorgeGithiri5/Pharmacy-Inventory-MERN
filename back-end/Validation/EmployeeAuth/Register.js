const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateUserRigister(data){
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name: ""
    data.email = !isEmpty(data.email) ? data.email: ""
    data.password = !isEmpty(data.password) ? data.password: ""
    data.password2 = !isEmpty(data.password2) ? data.password2: ""

    // Name Check
    if(Validator.isEmpty(data.name)){
        errors.name = "Name is Required"
    }
    // Email Check
    if(Validator.isEmpty(data.email)){
        errors.email = "Email is Required"
    }else if(!Validator.isEmail(data.email)){
        errors.emmail = "Invalid Email"
    }
    // Password Check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm Password"
    }

    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password = "Password must have atleast 6 Characters"
    }
    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "The Password Must Be Equal"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}