import React from 'react';

import Home from './components/Home';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Footer, Home, Nav, About } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Posts" component={Posts}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
