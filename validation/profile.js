
const Validator = require('validator');
const isEmpty =require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

data.handle = !isEmpty(data.handle) ? data.handle : '';
data.bio = !isEmpty(data.bio) ? data.bio : '';

//data.instagram = !isEmpty(data.instagram) ? data.instagram : '';
//data.name = !isEmpty(data.name) ? data.name : '';

if(Validator.isEmpty(data.handle)) {
    errors.handle ="Profile handle is required!";
}


if(Validator.isEmpty(data.bio)) {
    errors.bio ="Profile bio is required!";
}


if(!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter)){
    errors.twitter ="Not a valid URL!";
    }
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