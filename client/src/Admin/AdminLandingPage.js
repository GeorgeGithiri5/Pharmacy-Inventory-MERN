import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Create from "../pages/Create";
import CreateOrder from "../components/CreateOrder";
import CreateUser from "./componentAdmin/CreateUser";
import Dashboard from "./componentAdmin/Dashboard";
import MakeNote from "./componentAdmin/MakeNote";
import Message from "./componentAdmin/Message";
import Sidebar from "./componentAdmin/Sidebar";

const AdminLandingPage = () => {
  return (
    <>
      <div className="AdminPage">
        <Router>
          <div className="bg-dark sidebar">
            <Sidebar />
          </div>
          <div className="Dashboard">
            <Switch>
              <Route exact path="/AdminPage">
                <Dashboard />
              </Route>
              <Route path="/AdminPage/CreateOrder">
                <CreateOrder />
              </Route>
              <Route path="/AdminPage/Create">
                <Create />
              </Route>
              <Route path="/AdminPage/CreateUser">
                <CreateUser />
              </Route>
              <Route path="/AdminPage/Notice">
                <MakeNote />
              </Route>
              <Route path="/AdminPage/Message">
                <Message />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
};

export default AdminLandingPage;
