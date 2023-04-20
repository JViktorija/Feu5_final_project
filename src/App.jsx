import './styles/reset.css';
import './styles/App.css';
import React from 'react';
import Header from './components/layout/header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Footer from './components/layout/footer/Footer';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;