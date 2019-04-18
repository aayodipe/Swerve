import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Filter from "./component/Filter";
import Post from "./component/Post";
import Register from "./component/Register";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Login />
        <Switch>
          <Route exact path="/signup" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/filter" component={Filter} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
