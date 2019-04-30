import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Dashboard from "./Dashboard"
<<<<<<< HEAD
import Post from "./Post"
import Filter from "./Filter"

=======
import Navbar from './Navbar'
import Post from './Post'
>>>>>>> 9a598cb2883dee03a6211c9c221c8d643753c2dd
class Container extends Component {
  render() {
    return (
     
      <Router>   
          <div className = 'container'>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
<<<<<<< HEAD
          <Route exact path="/post" component={Post} />
          <Route exact path="/filter" component={Filter} />
          </div>
          {/*<Route exact path="/post" component={Post} />
          <Route exact path="/filter" component={Filter} />
          <Route component={NoMatch} /> */}
=======
          
         <Route exact path="/post" component={Post} />
          </div>
          {/* <Route exact path="/filter" component={Filter} />
          <Route component={NoMatch} /> */} */}
        </div>
>>>>>>> 9a598cb2883dee03a6211c9c221c8d643753c2dd
     
    </Router>
    );
    
  }
}


export default Container;
