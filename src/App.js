import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect 
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import Login from './pages/login';
import Home from './pages/home/home.jsx'
// const routes = [
//   {
//     path: "/Login",
//     component: Login
//   },
//   {
//     path: "/Home",
//     component: Home,
//     routes: [
//       {
//         path: "/tacos/Users",
//         component: Users
//       }
//     ]
//   }
// ];
export default function App() {
  return (
    <Router history = { createBrowserHistory }>
      <div>
        <Switch>
          <Route path="/home" component={Home}>
          </Route>
          <Route exact path="/login" component={Login}>
          </Route>
          <Redirect from="/*" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
function Users() {
  return <h2>Users</h2>;
}
