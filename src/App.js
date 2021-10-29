import React, {useState} from 'react';

import Home from './components/Home';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Footer, Home, Nav, About } from "./components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
      <Router>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Posts" component={Posts}/>
          <Route parth="/Login">
              <Login setIsLoggedIn={setIsLoggedIn}/>
           </Route> 
          <Route path="/Register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
