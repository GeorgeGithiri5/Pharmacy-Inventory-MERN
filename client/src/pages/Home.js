import React, { Component } from 'react';
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <>
                <BannerHolder bannerclass= 'mainBanner'>
                    <Banner title='Pharmacy Inventory' description='This is a fullStack inventory system aimed at
                    coming up with the best management of our store.'>
                        <Link to='/AdminLogin' className= 'btn btn-danger'>Admin</Link>
                        <Link to='/UserLogin' className= 'btn btn-warning ml-4'>Employee</Link>

                        <p className="lead">This Is Just A demo, More on this Project find it on (Backend Code And Authentication)
                            <Link to="https://github.com/GeorgeGithiri5/Pharmacy-Inventory-MERN">Github</Link>
                        </p>
                    </Banner>
                </BannerHolder>
            </>
        );
    }
}

export default Home;