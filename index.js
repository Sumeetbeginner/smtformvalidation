
const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
      return { valid: false, error: 'Name is required' };
    }
    if (!nameRegex.test(name)) {
      return { valid: false, error: 'Name can only contain alphabetic characters and spaces' };
    }
    return { valid: true };
  };
  

  const validateUsername = (username) => {
    const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;
    if (!username) {
      return { valid: false, error: 'Username is required' };
    }
    if (!usernameRegex.test(username)) {
      return { valid: false, error: 'Username must be 3-20 characters long and can only contain alphanumeric characters and underscores' };
    }
    return { valid: true };
  };
  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      return { valid: false, error: 'Password is required' };
    }
    if (!passwordRegex.test(password)) {
      return { valid: false, error: 'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a digit, and a special character' };
    }
    return { valid: true };
  };
  
 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return { valid: false, error: 'Email is required' };
    }
    if (!emailRegex.test(email)) {
      return { valid: false, error: 'Email is not valid' };
    }
    return { valid: true };
  };
  
  module.exports = {
    validateName,
    validateUsername,
  validatePassword,
    validateEmail,
  };
  