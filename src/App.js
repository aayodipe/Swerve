import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./component/Login.js"

class App extends Component {
  render() {
    return (
     
      <Router>
      <div>
        
     
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/filter" component={Filter} />
          <Route component={NoMatch} /> */}
        
      </div>
    </Router>
    );
    
  }
}


export default App;
