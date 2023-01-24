import Banner from "../components/Banner";
import BannerHolder from "../components/BannerHolder";
import CreateOrder from "../components/CreateOrder";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import OrderList from "../components/OrderList";

const Orders = () => {
  return (
    <>
      <Navbar />
      <BannerHolder bannerclass="pageBanner">
        <Banner title="This is Order page">
          <Link to="/" className="btn btn-warning">
            Go home
          </Link>
        </Banner>
      </BannerHolder>
      <CreateOrder />
      <OrderList />
    </>
  );
};

export default Orders;
