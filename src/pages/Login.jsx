import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    cardNumber: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      cardNumber: '',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = existingUsers.find(user => user.email === formData.email);

    if (isSignup) {
      if (foundUser) {
        setErrorMessage('⚠️ This email is already registered.');
        setSuccessMessage('');
      } else {
        const newUsers = [...existingUsers, formData];
        localStorage.setItem('users', JSON.stringify(newUsers));
        setSuccessMessage('✅ Signup completed successfully!');
        setErrorMessage('');
        resetForm();
      }
    } else {
      if (foundUser && foundUser.password === formData.password) {
        setSuccessMessage('✅ Logged in successfully!');
        setErrorMessage('');
        dispatch(setUser(foundUser));
        resetForm();
      } else {
        setErrorMessage('⚠️ Incorrect email or password.');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>{isSignup ? 'Signup Form' : 'Login'}</h2>

      <div className="toggle-buttons">
        <button
          className={!isSignup ? 'active' : ''}
          onClick={() => {
            setIsSignup(false);
            setSuccessMessage('');
            setErrorMessage('');
          }}
        >
          Login
        </button>
        <button
          className={isSignup ? 'active' : ''}
          onClick={() => {
            setIsSignup(true);
            setSuccessMessage('');
            setErrorMessage('');
          }}
        >
          Signup
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {isSignup && (
          <>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </>
        )}

        {!isSignup && <p className="forgot">Forgot password?</p>}
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}

      <p className="bottom-text">
        {!isSignup ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span
          onClick={() => {
            setIsSignup(!isSignup);
            setSuccessMessage('');
            setErrorMessage('');
          }}
        >
          {isSignup ? 'Login' : 'Signup'}
        </span>
      </p>
    </div>
  );
};

export default Login;