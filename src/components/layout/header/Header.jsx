import React from 'react';
import '../../../styles/reset.css';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header>
        <div className='container'>
            <Link to={'/'} className='styled'>Logo</Link>
            <nav>
                <NavLink to={'/'} className='styled hover'>Home page</NavLink>
                <NavLink to={'/register'} className='styled hover'>Register</NavLink>
                <NavLink to={'/login'} className='styled hover'>Login</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header;

