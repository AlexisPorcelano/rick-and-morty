import React from 'react';
import styles from './validations.module.css'

function Validations({ email, password }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /\d/;
  let errorMessage = '';

  if (!email || !emailRegex.test(email)) {
    errorMessage = 'Please insert a valid E-mail and password';
  } else if (email.length >= 35) {
    errorMessage = 'Email must be less than 35 characters long!';
  } else if (!password || !passwordRegex.test(password)) {
    errorMessage = 'Password must contain at least 1 number!';
  } else if (password.length < 6 || password.length > 10) {
    errorMessage = 'Password must be between 6 and 10 characters!';
  }

  return <p className= {styles.error} >{errorMessage}</p>;
  
}

export default Validations;
