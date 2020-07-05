import React, { Component } from 'react';
import BannerHolder from '../components/BannerHolder';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
            "name": '',
            "price": '',
            "quantity": '',
            "deliveredBy":'',
            "deliverEmail": '',
            "receivedBy": ''
        }
    }

    InputName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    InputPrice=(e)=>{
        this.setState({
            price: e.target.value
        })
    }
    InputQuantity=(e)=>{
        this.setState({
            quantity: e.target.value
        })
    }
    InputDeliveredBy=(e)=>{
        this.setState({
            deliveredBy: e.target.value
        })
    }
    InputDeliverEmail=(e)=>{
        this.setState({
            deliverEmail: e.target.value
        })
    }
    InputReceivedBy=(e)=>{
        this.setState({
            receivedBy: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const record = {
            name: this.state.name,
            price: this.state.price,
            quantity:this.state.quantity,
            deliveredBy : this.state.deliveredBy,
            deliverEmail : this.state.deliverEmail,
            receivedBy : this.state.receivedBy
        }
         axios.post('http://localhost:8000/Store/post',record)
                .then(data=>console.log(data.data));

                window.location = '/EmployeePage'
        
    }
    render() {
        return (
            <>
            <Navbar/>
            <div className='col-8 mx-auto'>
                <BannerHolder bannerclass='pageBanner'>
                    <Banner title='Create An New record page' className='m-3'>
                        <Link to='/Record' className='btn btn-dark'>Go to records</Link>
                    </Banner>
                </BannerHolder>
                <form onSubmit={this.onSubmit} className='mt-4'>
                    <div className='alert alert-success'>
                        <h4 className='text-center'>Create a new Product record,Remember to fill all details</h4>
                    </div>
                    <div className="form-group">
                        <label>Enter Product Name: </label>
                        <input 
                        className='form-control'
                        onChange={this.InputName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Product Price: </label>
                        <input 
                        className='form-control'
                        onChange={this.InputPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Product quantity: </label>
                        <input 
                        className='form-control'
                        onChange={this.InputQuantity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Product deliveredBy: </label>
                        <input 
                        className='form-control'
                        onChange={this.InputDeliveredBy}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Product deliverEmail: </label>
                        <input 
                        className='form-control'
                        onChange={this.InputDeliverEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Product receivedBy: </label>
                        <input 
                        className='form-control'
                        onChange={this.InputReceivedBy}
                        />
                    </div>
                    <button className='btn btn-warning' type='submit'>Add The record</button>
                </form>
            </div>
            </>
        );
    }
}

export default Create;