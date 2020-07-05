import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='navbar navbar-expand-lg bg-light d-flex'>
                    <Link to='/' className='navbar-brand mx-3'>PhyInv</Link>
                    <Link to='/AdminLogin' className='btn btn-warning'>Admin</Link>
                    <Link to='/UserLogin' className='btn btn-warning mx-3'>Employee</Link>

                    <button className="navbar-toggler" type="button" data-target="#navbarSupportedContent" data-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/Record' className="nav-link active">Records</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/Create' className="nav-link">Add Product</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/Order' className="nav-link">Order</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </>
        );
    }
}

export default Navbar;