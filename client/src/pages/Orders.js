import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CreateOrder from '../components/CreateOrder';
import OrderList from '../components/OrderList'
import Navbar from '../components/Navbar';
import BannerHolder from '../components/BannerHolder'
import Banner from '../components/Banner'

class Orders extends Component {
    render() {
        return (
            <>
               <Navbar/>
               <BannerHolder bannerclass='pageBanner'>
                    <Banner title='This is Order page'>
                        <Link to='/' className='btn btn-warning'>Go home</Link>
                    </Banner>   
                </BannerHolder>
                <CreateOrder/>
                <OrderList/> 
            </>
        );
    }
}

export default Orders;