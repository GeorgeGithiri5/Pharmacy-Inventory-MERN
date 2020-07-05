import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import Login from '../Admin/Auth/Login'

class Admin extends Component {
    render() {
        return (
            <>
               <BannerHolder bannerclass='mainBanner'>
                    <Banner>
                        <h3 className="display-2">Admin Login</h3>
                        <p className="lead">
                            Hello Admin,Login To Take Control.
                        </p>
                    <Login/>
                    </Banner>
               </BannerHolder>
            </>
        );
    }
}

export default Admin;