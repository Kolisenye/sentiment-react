import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import Home from './pages/Home'


function App() {
  return (
    <div>
      <Router>
        <Switch>
           <Route exact path="/">
            <Landing/>
           </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router> 
    </div>
  )
}

export default App
