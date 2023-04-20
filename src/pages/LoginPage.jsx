import React from 'react'
import styled from 'styled-components';

const DivS = styled.div`
  height: 89vh;
`;

function LoginPage() {
  return (
    <DivS className="container">
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>
    </DivS>
  )
}

export default LoginPage;