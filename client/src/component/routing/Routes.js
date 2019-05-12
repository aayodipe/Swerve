import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';
import Post from '../../pages/Post';
import Filter from "../../pages/Filter";
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className="main-container">
    
      <Switch>
       <Route exact path='/' component={Dashboard} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/post' component={Post} />
        <PrivateRoute exact path='/filter' component={Filter} />
         </Switch>
    </section>
  );
};

export default Routes;
