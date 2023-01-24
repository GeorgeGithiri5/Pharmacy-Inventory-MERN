import Banner from "../../components/Banner";
import BannerHolder from "../../components/BannerHolder";
import { Component } from "react";

class AdminHomePage extends Component {
  render() {
    return (
      <>
        <BannerHolder bannerclass="AdminBanner">
          <Banner
            title="Hello,Welcome Admin"
            description="Take Control of the whole company at the comfort of your seat,Happy Management"
          ></Banner>
        </BannerHolder>
      </>
    );
  }
}

export default AdminHomePage;
