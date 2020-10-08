const validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function SalesValidate(data){
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name:"";
    data.quantity = !isEmpty(data.quantity) ? data.quantity:"";
    data.amount = !isEmpty(data.amount) ? data.amount:"";
    
    if(validator.isEmpty(data.name)){
        errors.name = "Name of the product is required"
    }
    if(validator.isEmpty(data.quantity)){
        errors.quantity = "Quantity of data is required"
    }
    if(validator.isEmpty(data.amount)){
        errors.amount = "Amount is required"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}