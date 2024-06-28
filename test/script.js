
const formValidate = require('smt-form-validation')

console.log(formValidate.validateName('Sumeet'));
console.log(formValidate.validateName('7492Sume'));

console.log(formValidate.validateEmail('sumeetgupta@gmail.com'));
console.log(formValidate.validateEmail('sumeetgupta@gmailcom'));