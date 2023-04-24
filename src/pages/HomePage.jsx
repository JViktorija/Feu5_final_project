import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import image from '../components/ui/img/photo.jpg';

const DivS = styled.div`
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <DivS className="container">
        <h1 style={{ fontSize: '5rem', color: 'snow' }}>HELLO & WELCOME</h1>
        <div style={{ color: 'snow' }}>
          <Clock format="h:mm:ss a" />
        </div>
      </DivS>
    </div>
  );
}

export default HomePage;
