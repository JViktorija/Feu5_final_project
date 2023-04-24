import './styles/reset.css';
import './styles/App.css';
import React from 'react';
import Header from './components/layout/header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Footer from './components/layout/footer/Footer';
import RegisterPage from './pages/RegisterPage';
import Shops from './pages/ShopsPage';
import AddShops from './pages/AddShopsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/add" element={<AddShops />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
