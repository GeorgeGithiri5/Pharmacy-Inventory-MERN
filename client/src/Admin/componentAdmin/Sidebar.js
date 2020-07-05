import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <>
            <Link className='navbar-brand adminHeader p-5' to='/AdminPage'>Admin</Link>
            <div className="list-group list-group-flush border-right m-2">
                    <Link className='list-group-item list-group-item-action' to='/AdminPage'>Dashboard</Link>
                    <Link className='list-group-item list-group-item-action' to='/AdminPage/CreateUser'>Create User</Link>
                    <Link className='list-group-item list-group-item-action' to='/AdminPage/CreateOrder'>Create Order</Link>
                    <Link className='list-group-item list-group-item-action' to='/AdminPage/Create'>Create Record</Link>
                    <Link className='list-group-item list-group-item-action' to='/AdminPage/Message'>Message</Link>
                    <Link className='list-group-item list-group-item-action' to='/AdminPage/Notice'>Make Notice</Link>
                </div>
            </>
        );
    }
}

export default Sidebar;