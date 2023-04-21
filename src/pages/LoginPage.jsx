import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DivS = styled.div`
  height: 89vh;
  padding-top: 5rem;
`;

function LoginPage() {
  return (
    <DivS className="container">
      <h1>Login</h1>
      <p>You can login here:</p>
      <button type='submit'>Log in</button>
      
      <h2>Don't have an account?</h2>
      <Link to={'/register'}>
        <button>Register</button>
      </Link>
    </DivS>
  )
}

export default LoginPage;