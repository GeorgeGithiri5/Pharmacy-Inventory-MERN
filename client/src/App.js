import React from "react";
import "./App.css";
import {Route,Switch} from 'react-router-dom'
// import Navbar from './components/Navbar'
import Create from './pages/Create'
import Home from './pages/Home'
import Order from './pages/Orders'
import Product from './pages/Product'
import EmployeePage from './pages/EmployeePage'

import Register from "./Admin/Auth/Register";
import AdminLogin from "./Admin/Auth/Login";

import UserLogin from './UserAuth/Login'
import UserRegister from './UserAuth/Register'

import {Provider} from "react-redux"
import store from "./store"

import jwt_decode from "jwt-decode"
import setAuthToken from './Utils/setToken'
import {setCurrentUser,logoutUser} from './actions/authActions'
import PrivateRoute from './Admin/Auth/PrivateRoute'
import AdminPage from './Admin/AdminLandingPage'
import PrivateRouteUser from './UserAuth/PrivateRoute/PrivateRoute'

if(localStorage.jwtToken){
  const token = localStorage.jwtToken
  setAuthToken(token)

  const decoded = jwt_decode(token)

  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now()/1000
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser())
    window.location.href = './AdminLogin'
  }
}

function App() {
  return (
    <Provider store = {store}>
        <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path ='/AdminRegister' component = {Register}/>
        <Route path ='/AdminLogin' component = {AdminLogin}/>
        <Route path='/UserLogin' component={UserLogin} />
        <Route path='/UserRegister' component={UserRegister} />
      </Switch>
      <Switch>
        <PrivateRoute
           exact path="/AdminPage" component={AdminPage}
        />
        <PrivateRouteUser exact path="/Record" component={EmployeePage}/>
        <PrivateRouteUser path='/Create' component={Create} />
        <PrivateRouteUser path='/Product' component={Product} />
        <PrivateRouteUser path='/Order' component={Order} />
      </Switch>
    </>
    </Provider>
  );
}

export default App;
