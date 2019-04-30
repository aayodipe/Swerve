import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import { ImplicitCallback } from "@okta/okta-react";
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from "./component/AppHeader";
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Filter from "./pages/Filter";
import Container from "./pages/Container";

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
    <Container />
    {/* <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/post" component={Post} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/filter" component={Filter} /> */}
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <Route exact path="/implicit/callback" component={ImplicitCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
