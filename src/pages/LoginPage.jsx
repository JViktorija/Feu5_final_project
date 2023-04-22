import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../components/auth/Login';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../components/store/AuthProvider';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, DivCont } from '../components/ui/styled/Styles';
import { useNavigate } from "react-router-dom";

const Wrapper  = styled.div`
  display: flex;
  height: 89vh;
  background: linear-gradient(to bottom, #e66465, blue, #9198e5);
`
const H1 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
`;
const H2 = styled.h2`
  margin-top: 15rem;
  margin-bottom: 0;
`;
// const H2LoggedIn = styled.h2`
//   font-size: 3rem;
//   padding-top: 100%;
//   color: #333;
// `

function LoginPage() {
  const { isLoggedIn, user } = useAuthCtx();
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, __, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function loginWithHooks({ email, password }) {
    const rez = signInWithEmailAndPassword(email, password).then(() => {
      navigate('/shops');
      toast.success('Login success');
    });
  }
  console.log('user ===', user);

  return (
    <Wrapper>
      <DivCont className="container">
        {!isLoggedIn && (<H1>Login</H1>)}
        {/* {!isLoggedIn && (<h2>You can login here:</h2>)} */}
        {error && <h3 style={{color: "red"}}>Wrong Email or Password</h3>}
        {loading && <h2>Loading...</h2>}
        {/* {isLoggedIn && <H2LoggedIn>You are logged in as {user.email} </H2LoggedIn>} */}
        {!isLoggedIn && (<><Login onLogin={loginWithHooks} />
      


        <H2>Don't have an account?</H2>
        <Link to={'/register'}>
          <Button>Register</Button>
        </Link></>)}
      </DivCont>
    </Wrapper>
  )
}

export default LoginPage;