import React from 'react'
import styled from 'styled-components';
import Clock from './Clock';

const DivS = styled.div`
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
  return (
    <DivS className="container">
      <h1>Welocome!</h1>
      <div>
      <Clock format="h:mm:ss a" />
    </div>
    </DivS>
  )
}

export default HomePage;