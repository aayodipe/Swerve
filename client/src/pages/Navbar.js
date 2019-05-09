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
    <div className="loggedout-nav">
      <div className="loggedout-header">
      <h2 className="loggedout-header-font">You are logged out. To view the dashboard and post please login or sign up.</h2>
      </div>
      <a className="loggedout-links">
        <Link to='/register'>Register</Link>
      </a>
      <a className="loggedout-links">
        <Link to='/login'>Login</Link>
      </a>
    </div>
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
      <div className="svg-container">
        <svg viewBox="0 0 3500 500" className="svg1">
          <path d="M0,100 C150,200 350,0 500,100 C650,200 700,0 850,50 C1000,100 1150,200 1300,100 C1450,0 1600,100 1750,150 C1900,200 2050,0 2200,100 C2350,200 2500,100 2650,100 C2800,100 2950,200 3100,100 C3250,0 3400,200 3550,150 L3500,00 L0,0 Z"></path>
        </svg>
      </div>
      <div>
        <svg viewBox="0 0 3500 500" className="svg2">
          <path d="M0,300 C125,400 250,50 375,250 C500,400 625,450 750,250 C875,100 1000,50 1125,150 C1250,300 1375,400 1500,250 C1625,100 1750,200 1875,275 C2000,350 2125,400 2250,300 C2375,200 2500,100 2625,200 C2750,300 2875,400 3000,300 C3125,200 3250,150 3375,200 C3425,250 3475,300 3500,350 L3500,00 L0,0 Z"></path>
        </svg>
      </div>
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
