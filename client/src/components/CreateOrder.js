import React from "react";
import axios from "axios";

export default class CreateOrder extends React.Component {
  state = {
    name: "",
    quantity: "",
    budget: "",
  };
  OnchangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  OnchangeQuantity = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };
  OnchangeBudget = (e) => {
    this.setState({
      budget: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      quantity: this.state.quantity,
      budget: this.state.budget,
    };
    axios.post("http://localhost:8000/Order", order);
    window.location = "/Order";
  };
  render() {
    return (
      <>
        <h4 className="display-2 text-center">Create An Order</h4>
        <form onSubmit={this.onSubmit} className="col-8 mx-auto">
          <div className="form-group">
            <label>Name Of the Product to Order:</label>
            <input
              className="form-control"
              value={this.state.name}
              onChange={this.OnchangeName}
            />
          </div>
          <div className="form-group">
            <label>Quantity To Order:</label>
            <input
              className="form-control"
              value={this.state.quantity}
              onChange={this.OnchangeQuantity}
            />
          </div>
          <div className="form-group">
            <label>Budget for the Order:</label>
            <input
              className="form-control"
              value={this.state.budget}
              onChange={this.OnchangeBudget}
            />
          </div>
          <button className="btn btn-dark" type="submit">
            Order
          </button>
        </form>
      </>
    );
  }
}
