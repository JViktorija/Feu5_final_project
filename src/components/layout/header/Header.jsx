import React from 'react';
import '../../../styles/reset.css';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../../auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
      <div className="container">
        <Link to={'/'} className="styled">
          Logo
        </Link>
        <nav>
          {isLoggedIn && (
            <>
              <NavLink to={'/'} className="styled hover">
                Home page
              </NavLink>
              <NavLink to={'/shops'} className="styled hover">
                Shops
              </NavLink>
              <NavLink to={'/add'} className="styled hover">
                Add Shops
              </NavLink>
              <Logout className="styled hover" />
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink to={'/login'} className="styled hover">
                Login
              </NavLink>
              <NavLink to={'/register'} className="styled hover">
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
