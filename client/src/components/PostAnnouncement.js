import { Component } from "react";
import Axios from "axios";

class PostAnnouncement extends Component {
  constructor() {
    super();
    this.state = {
      announcement: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:8000/Announcement").then((data) => {
      this.setState({
        announcement: data.data,
      });
    });
  }
  render() {
    const announce = this.state.announcement.map((item) => {
      return (
        <div
          key={item._id}
          className="border-bottom mb-2"
          style={{ color: "white" }}
        >
          <h6 className="text-center">{item.title}</h6>
          <p className="lead">{item.announcement}</p>
        </div>
      );
    });
    return (
      <div className="bg-danger mb-2 col-8 mx-auto p-2">
        <h4 className="text-center">Abc Inventory Announcements</h4>
        {announce}
        <div className="card mb-5">
          <h2 className="text-center">Alert !!</h2>
          <p className="card-body lead">
            Any Products Received from Supplier Xyz should Be well Verified.
            Last Week Two Of Our Clients Complained Of the product standard. Any
            Delivery from the Supplier should be Verified and checked well
            before transactions.
          </p>
        </div>

        <div className="card mb-5">
          <h2 className="text-center">Stand-Up Meetings</h2>
          <p className="card-body lead">
            From Next week, our stand up meetings will be at 8am in the morning.
            Also There will be Report from every employee with as management
            role to improve on our store management
          </p>
        </div>
      </div>
    );
  }
}

export default PostAnnouncement;
