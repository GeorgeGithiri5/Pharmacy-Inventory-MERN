import Banner from "../components/Banner";
import BannerHolder from "../components/BannerHolder";
import { Component } from "react";
import Login from "../Admin/Auth/Login";

class Admin extends Component {
  render() {
    return (
      <>
        <BannerHolder bannerclass="mainBanner">
          <Banner>
            <h3 className="display-2">Admin Login</h3>
            <p className="lead">Hello Admin,Login To Take Control.</p>
            <Login />
          </Banner>
        </BannerHolder>
      </>
    );
  }
}

export default Admin;
