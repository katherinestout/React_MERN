
const Validator = require('validator');
const isEmpty =require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

data.handle = !isEmpty(data.handle) ? data.handle : '';
//data.instagram = !isEmpty(data.instagram) ? data.instagram : '';
//data.name = !isEmpty(data.name) ? data.name : '';

if(Validator.isEmpty(data.handle)) {
    errors.handle ="Profile handle is required!";
}



if(!isEmpty(data.instagram)) {
    if(!Validator.isURL(data.instagram)){
    errors.instagram ="Not a valid URL!";
    }
}


  return {
    errors,
    isValid: isEmpty(errors)
  };
};