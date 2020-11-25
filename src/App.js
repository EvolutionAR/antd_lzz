import './App.css';
import { Button } from 'antd';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect 
} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home/home.jsx'
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect from="/*" to="/login" />
         
        </Switch>
      </div>
    </Router>
  );
}
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
