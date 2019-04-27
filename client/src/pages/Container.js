import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Dashboard from "./Dashboard"
import Navbar from './Navbar'

class Container extends Component {
  render() {
    return (
     
      <Router>   
          
          <div>
          <Navbar />
          <div className = 'container'>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          </div>
          {/*<Route exact path="/post" component={Post} />
          <Route exact path="/filter" component={Filter} />
          <Route component={NoMatch} /> */}
        </div>
     
    </Router>
    );
    
  }
}


export default Container;
