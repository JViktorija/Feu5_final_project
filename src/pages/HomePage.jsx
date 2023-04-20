import React from 'react'
import styled from 'styled-components';

const DivS = styled.div`
  height: 90vh;
`;

function HomePage() {
  return (
    <DivS className="container">
      <h1>HomePage</h1>
      <p>This is HomePage</p>
    </DivS>
  )
}

export default HomePage;