import React from "react";
import { Link } from 'react-router-dom';
import Register from '../components/auth/Register';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import styled from 'styled-components';

const DivS = styled.div`
  height: 89vh;
  padding-top: 5rem;
`;

function RegisterPage() {
  const auth = getAuth();
  const registerFireBase = async ({ email, password }) => {
    console.log('{ email, password } ===', { email, password });
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('user ===', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.warn('errorMessage ===', errorMessage);
    }
  }
  
  return (
    <DivS className="container">
      <h1>Register </h1>
      <p>Are you a new user? No problem, register here:</p>
      <Register onRegister={registerFireBase}/>

      <h2>Already an user?</h2>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
    </DivS>
  )
}

export default RegisterPage;