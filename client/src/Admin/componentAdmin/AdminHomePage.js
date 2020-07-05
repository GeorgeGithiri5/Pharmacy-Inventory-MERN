import React, { Component } from 'react';
import BannerHolder from '../../components/BannerHolder';
import Banner from '../../components/Banner';

class AdminHomePage extends Component {
    render() {
        return (
            <>
                 <BannerHolder bannerclass='AdminBanner'>
                     <Banner title='Hello,Welcome Admin' description='Take Control of the whole company at the comfort of your seat,Happy Management'>
                        
                     </Banner>
                 </BannerHolder>
            </>
        );
    }
}

export default AdminHomePage;