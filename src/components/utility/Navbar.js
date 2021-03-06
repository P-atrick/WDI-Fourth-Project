import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';

const Navbar = ({ history, toggleBurger, showBurger }) => {

  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <i className="navbar-item fas fa-rocket fa-2x"></i>
        <div className={`${(showBurger ? 'is-active' : '')} navbar-burger burger`} data-target="navbar" onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbar" className={`${(showBurger ? 'is-active' : '')} navbar-menu`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">Home</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/meteorites">Meteorites</a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="/meteorites">All Meteorites</a>
              <a className="navbar-item" href="/meteorites/new">Add a Meteorite</a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/meteorites/sale">
                Meteorites for Sale
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          { !Auth.isAuthenticated() && <a className="navbar-item" href="/login">Login</a>}
          { !Auth.isAuthenticated() && <a className="navbar-item" href="/register">Register</a>}
          { Auth.isAuthenticated() && <Link className="navbar-item" to={`/users/${Auth.getPayload().userId}`}>
            Profile</Link>}
          { Auth.isAuthenticated() && <a className="navbar-item" href="#" onClick={logout}>Logout</a>}
        </div>
      </div>

    </nav>
  );
};

export default withRouter(Navbar);
