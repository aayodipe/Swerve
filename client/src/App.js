import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import { ImplicitCallback } from "@okta/okta-react";
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from "./component/AppHeader";
import Home from './pages/Home';
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Filter from "./pages/Filter";
import Container from "./pages/Container";
=======
import Post from './pages/Post';
import Dashboard from "./pages/Dashboard";
>>>>>>> 9a598cb2883dee03a6211c9c221c8d643753c2dd

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
<<<<<<< HEAD
    <Container />
    {/* <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/post" component={Post} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/filter" component={Filter} /> */}
=======
    <Route exact path="/post" component={Post} />
    <Route exact path="/dashboard" component={Dashboard} />
>>>>>>> 9a598cb2883dee03a6211c9c221c8d643753c2dd
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <Route exact path="/implicit/callback" component={ImplicitCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
