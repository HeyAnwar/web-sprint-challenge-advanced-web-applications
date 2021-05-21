import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState('')
  const { push } = useHistory

  const handleChanges = (e) => {
    setUserLogin({...userLogin, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', userLogin)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      push('/protected')
    })
    .catch(err => {
      console.log(err)
    })
    if (userLogin.username === '' || userLogin.password === '') {
      setError('Username or Password not valid.')
    }else if(userLogin.username !== 'Lambda' || userLogin.password !== 'i<3Lambd4') {
      setError('Username or Password not valid.')
    }
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  
  
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleSubmit}>
          <input 
          data-testid='username'
          name='username'
          type='text'
          placeholder='username'
          value={userLogin.username}
          onChange={handleChanges}
          />
          <br />
          <input
          data-testid='password'
          name='password'
          type='password'
          placeholder='password'
          value={userLogin.password}
          onChange={handleChanges}
          />
        </form>
        <button>
          Login
        </button>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.