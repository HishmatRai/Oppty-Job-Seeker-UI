import React, { Component } from 'react';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './../Pages/Home';
import About from './../Pages/About';
import Messages from './../Pages/Messages';
import Contact from './../Pages/Contact';
class Router extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Router;
