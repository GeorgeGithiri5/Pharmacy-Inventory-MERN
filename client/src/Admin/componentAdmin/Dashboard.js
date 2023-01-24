import React, { Component } from "react";

import AdminHomePage from "./AdminHomePage";

class Dashboard extends Component {
  render() {
    return (
      <>
        <AdminHomePage />
        <div className="mt-1">
          <h2 className="text-center">Analytics</h2>
          <div className="row mt-1 p-5">
            <div className="col-lg-4 card bg-warning">
              <h2 className="card-header">Debts</h2>
              <div className="card-body">
                <p className="lead">1234 Cases</p>
              </div>
            </div>
            <div className="col-lg-4 card bg-success">
              <h2 className="card-header">Profits</h2>
              <div className="card-body">
                <p className="lead">Ksh 2.4B</p>
              </div>
            </div>
            <div className="col-lg-4 card bg-danger">
              <h2 className="card-header">Losses</h2>
              <div className="card-body">
                <p className="lead">Ksh 200,000</p>
              </div>
            </div>
            <p className="lead text-center mt-2">
              More on this Dashboard page will be designed According To Client
              desire
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
