import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostAnnouncement from "../components/PostAnnouncement";
import axios from "axios";

class EmployeePage extends Component {
  constructor() {
    super();
    this.state = {
      record: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/Store").then((data) => {
      this.setState({ record: data.data });
    });
  }
  Delete = (id) => {
    axios
      .delete("http://localhost:8000/Store/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      record: this.state.record.filter((el) => el._id !== id),
    });
  };
  render() {
    const record = this.state.record.map((item) => {
      return (
        <tr key={item.price}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.deliveredBy}</td>
          <td>{item.deliverEmail}</td>
          <td>{item.receivedBy}</td>
          <td>
            <button className="btn btn-danger" onClick={this.Delete}>
              Del
            </button>
          </td>
          <td>
            <Link to="" className="btn btn-dark">
              Edit
            </Link>
          </td>
        </tr>
      );
    });

    return (
      <>
        <div className="col-12 mx-auto">
          <Navbar />
          <Link className="btn btn-primary mt-4" to="/Create">
            Create A new Record
          </Link>
          <table className="table table-stripped table-bordered mx-auto mt-3 record">
            <thead className="thead-dark">
              <tr>
                <th>Product Name</th>
                <th>Product price</th>
                <th>Product quantity</th>
                <th>Product deliveredBy</th>
                <th>Product deliverEmail</th>
                <th>Product receivedBy</th>
                <th>Delete Product</th>
                <th>Edit Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quinine</td>
                <td>45000 Ksh</td>
                <td>10000gms</td>
                <td>Kenya Medicine Body</td>
                <td>kenyamedicinebody@gmail.com</td>
                <td>Madam Rose</td>
                <td>
                  <button className="btn btn-danger">Del</button>
                </td>
                <td>
                  <button className="btn btn-dark">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Chroloform</td>
                <td>500000 Ksh</td>
                <td>1000gms</td>
                <td>United Nations Medicine Services</td>
                <td>unmed@gmail.com</td>
                <td>Madam Jecinta</td>
                <td>
                  <button className="btn btn-danger">Del</button>
                </td>
                <td>
                  <button className="btn btn-dark">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Panadol</td>
                <td>40000 Ksh</td>
                <td>1000 tablets</td>
                <td>Kenya Medicine Manufacturer</td>
                <td>kemri@gmail.com</td>
                <td>Sir John</td>
                <td>
                  <button className="btn btn-danger">Del</button>
                </td>
                <td>
                  <button className="btn btn-dark">Edit</button>
                </td>
              </tr>
              {record}
            </tbody>
          </table>
        </div>
        <PostAnnouncement />
      </>
    );
  }
}

export default EmployeePage;
