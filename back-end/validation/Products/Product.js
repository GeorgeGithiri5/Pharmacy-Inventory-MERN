const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProducts(data) {
  let errors = {};

  data.productname = !isEmpty(data.productname) ? data.productname : "";
  data.quantity = !isEmpty(data.quantity) ? data.quantity : "";
  data.amount = !isEmpty(data.amount) ? data.amount : "";
  data.deliveredby = !isEmpty(data.deliveredby) ? data.deliveredby : "";

  if (validator.isEmpty(data.productname)) {
    errors.productname = "Product Name is required";
  }
  if (validator.isEmpty(data.quantity)) {
    errors.quantity = "Quantity of the Product is required";
  }
  if (validator.isEmpty(data.amount)) {
    errors.amount = "Amount is required";
  }
  if (validator.isEmpty(data.deliveredby)) {
    errors.deliveredby =
      "Enter the name of the person who delivered the products";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
