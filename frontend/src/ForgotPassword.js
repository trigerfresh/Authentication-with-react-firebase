import React from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';

function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value; // Access the email value from the input field
    sendPasswordResetEmail(auth, emailVal)
      .then((data) => {
        alert('Email is sent. Check your Gmail');
      })
      .catch((err) => {
        alert('Signup email is not available in the database: ', err.code);
      });
  };

  return (
    <div>
      <h1>Forgot Password Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" name="email" placeholder="Enter email" /> {/* Add name attribute */}
        <br />
        <br />
        <button type="submit">Reset Password</button>
      </form>
      <br />
      <p>
        Click here to login
        <Link to="/" style={{ textDecoration: 'none' }}>Login</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
