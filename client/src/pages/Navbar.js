import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
     render(){
          return(
               
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className = "container">
               {/* <Link className="navbar-brand" to="#">Navbar w/ text</Link> */}
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarText">
                 <ul className="navbar-nav mr-auto">
                   <li className="nav-item active">
                     <Link className="nav-link" to="/filter">Filter </Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to="/login">Sign Out</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to="/post">Post</Link>
                   </li>
                 </ul>
              
               </div>
               </div>
             </nav>
          )
     }
}

export default Navbar