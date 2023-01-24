import Axios from "axios";
import { Component } from "react";

class MakeNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      announcement: "",
      response: "",
    };
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  onChangeAnnc = (e) => {
    this.setState({
      announcement: e.target.value,
    });
  };
  onSubmitAn = (e) => {
    e.preventDefault();
    const PostAnnc = {
      title: this.state.title,
      announcement: this.state.announcement,
    };
    Axios.post("http://localhost:8000/Announcement", PostAnnc)
      .then((data) => {
        this.setState({
          response: "Announcement Posted",
        });
      })
      .catch((err) => {
        this.setState({
          response: "An Error Occurred",
        });
      });
  };
  render() {
    const handlePost = this.state.response;
    return (
      <>
        <div className="alert alert-danger">{handlePost}</div>
        <div className="col-8 mx-auto">
          <div className="header">
            <h2 className="text-center">Create An Announcement</h2>
          </div>
          <form onSubmit={this.onSubmitAn}>
            <div className="form-group">
              <label>Announcement Title:</label>
              <input
                className="form-control"
                type="text"
                value={this.state.title}
                onChange={this.onChangeTitle}
                placeholder="Enter Username.."
              />
            </div>
            <div className="form-group">
              <label>Announcement:</label>
              <textarea
                className="form-control"
                value={this.state.announcement}
                onChange={this.onChangeAnnc}
                placeholder="Enter message..."
              ></textarea>
            </div>
            <button className="btn btn-success" type="submit">
              Add Announcement
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default MakeNote;
