const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateLoginUser(data){
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email: ""
    data.password = !isEmpty(data.password) ? data.password: ""

    // Email Check
    if(Validator.isEmpty(data.email)){
        errors.email = "Email Is Required"
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is Invalid"
    }
    // Password Check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is Required"
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}