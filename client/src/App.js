import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Test from "./static/Test";
import Test2 from "./static/Test2";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" exact render={(props) => <Landing />}></Route>
          <Route path="/login" exact render={(props) => <Login />}></Route>
          <Route path="/signup" exact render={(props) => <Signup />}></Route>
          <Route path="/home" exact render={(props) => <Home />}></Route>
          <Route path="/test" component={Test} />
          <Route path="/test2" component={Test2} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
