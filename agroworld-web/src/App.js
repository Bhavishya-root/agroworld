// import logo from './logo.svg';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import 'react-tabs/style/react-tabs.css';
import Home from "./component/Home";
import Nav from "./component/Nav";
import Services from "./component/Services";
import SignUp from './component/SignUp';
import Login from "./component/Login";
import Homepage from "./component/Homepage";
import Products from "./component/Products";
import Checkout from "./component/Checkout";



export default class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Nav />
          <Route path="/" component={Home} exact></Route>
          <Route path="/homepage" component={Homepage}></Route>
          <Route path="/services" component={Services} exact></Route>
          <Route path="/registrationpage" component={SignUp}></Route>
          <Route path="/loginpage" component={Login}></Route>

          <Route path="/product/:shop_id" component={Products}></Route>
          <Route path="/checkout" component={Checkout}></Route>

          {/* <Route path="/home" component={Home} exact></Route> */}
        </Router>

      </div>
    )
  }
}



