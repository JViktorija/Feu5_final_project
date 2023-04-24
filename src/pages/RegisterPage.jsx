import React from "react";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import { auth } from '../firebase/firebase';
// import Register from '../components/auth/Register';
import ValidationSchema from '../components/auth/Register';
import { toast } from 'react-toastify';
import { Button, DivCont } from "../components/ui/styled/Styles";

const Wrapper  = styled.div`
 display: flex;
  height: 89vh;
  background: linear-gradient(to bottom, #e66465, blue, #9198e5);
`;
const H1 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
`;
const H2 = styled.h2`
  margin-top: 15rem;
  margin-bottom: 0;
`;

function RegisterPage() {

  const registerFireBase = async ({ email, password }) => {
    console.log('{ email, password } ===', { email, password });
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('user ===', user);
        toast.success('Sign up successfull')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.warn('errorMessage ===', errorMessage);
      toast.error('Try again')
    }
  }
  
  return (
    <Wrapper>
      <DivCont className="container">
        <H1>Sign Up </H1>
        {/* <p>Are you a new user? No problem, register here:</p> */}
        {/* <Register onRegister={registerFireBase}/> */}
        <ValidationSchema onRegister={registerFireBase}/>

        <H2>Already an user?</H2>
        <Link to={'/login'}>
          <Button>Login</Button>
        </Link>
      </DivCont>
    </Wrapper>
  )
}

export default RegisterPage;