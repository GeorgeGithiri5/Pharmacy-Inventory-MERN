import "./App.css";

import { Route, Switch } from "react-router-dom";
import { logoutUser, setCurrentUser } from "./actions/authActions";

import AdminLogin from "./Admin/Auth/Login";
import AdminPage from "./Admin/AdminLandingPage";
import Create from "./pages/Create";
import EmployeePage from "./pages/EmployeePage";
import Home from "./pages/Home";
import Order from "./pages/Orders";
import PrivateRoute from "./Admin/Auth/PrivateRoute";
import PrivateRouteUser from "./UserAuth/PrivateRoute/PrivateRoute";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import React from "react";
import Register from "./Admin/Auth/Register";
import UserLogin from "./UserAuth/Login";
import UserRegister from "./UserAuth/Register";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utils/setToken";
import store from "./store";

// import Navbar from './components/Navbar'

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./AdminLogin";
  }
}

function App() {
  return (
    <Provider store={store}>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AdminRegister" component={Register} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/UserLogin" component={UserLogin} />
          <Route path="/UserRegister" component={UserRegister} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/AdminPage" component={AdminPage} />
          <PrivateRouteUser exact path="/Record" component={EmployeePage} />
          <PrivateRouteUser path="/Create" component={Create} />
          <PrivateRouteUser path="/Product" component={Product} />
          <PrivateRouteUser path="/Order" component={Order} />
        </Switch>
      </>
    </Provider>
  );
}

export default App;
