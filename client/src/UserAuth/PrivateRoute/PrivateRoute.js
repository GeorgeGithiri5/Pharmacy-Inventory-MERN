import { Redirect, Route } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRouteUser = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/UserLogin" />
      )
    }
  />
);

PrivateRouteUser.propType = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRouteUser);
