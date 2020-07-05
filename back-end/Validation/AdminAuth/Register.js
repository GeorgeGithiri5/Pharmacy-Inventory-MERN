const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegister(data){
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name:""
    data.email = !isEmpty(data.email) ? data.email: ""
    data.password = !isEmpty(data.password) ? data.password: ""
    data.password2 = !isEmpty(data.password2) ? data.password2:""

    // Name Checks 
    if(Validator.isEmpty(data.name)){
        errors.name = "Name Is Required"
    }
    // Email Check
    if(Validator.isEmpty(data.email)){
        errors.email = "Email Required"
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email Invalid"
    }
    // Password Check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password Is Required"
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm Password Is Required"
    }
    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password = "Password Must be Atleast 6 Characters"
    }
    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "Password Must Match"
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}