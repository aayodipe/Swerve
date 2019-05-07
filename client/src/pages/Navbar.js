import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import "../styles/navbar.css"
//import logo from "../styles/icon_logo.png";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
        {/* <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <i className='fas fa-user' />{' '}
            <span className='hide-sm'>Dashboard</span>
          </Link>
        </li>
        <li> */}
        <a className="logout-button" onClick={() => {
          logout();
          console.log('hit');
        }}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span>Logout</span>
        </a>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/Login'>Post</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    // <nav>
    <div className="navbar-header">
    <div className="navbar-background"></div>
      <nav className='navbar '>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>

    //     <h1 className="header-text">SWERVE</h1>
    //     <div className="username-logo">
    //         <img src={logo} alt="user icon" className="logo" />
    //         {this.props.auth.user && <h1 className="username-text">Hello, {this.props.auth.user.name}!</h1>}
    //     </div>
    //     <div className="svg-container">
    //         <svg viewBox="0 0 4500 200">
    //             <path d="M0,100 C150,200 350,0 500,100 C650,0 700,100 850,200 C1000,100 1150,0 1300,100 C1450,200 1600,100 1750,0 C1900,100 2050,200 2200,100 C2350,0 2500,100 2650,200 L2600,00 L0,0 Z" className="wave"></path>
    //         </svg>
    //     </div>
    // </div>
  );
};


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
