import React, { Component } from 'react';
import Sidebar from './componentAdmin/Sidebar'
import Dashboard from './componentAdmin/Dashboard'
import CreateOrder from '../components/CreateOrder';
import Create from '../pages/Create';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import CreateUser from './componentAdmin/CreateUser';
import MakeNote from './componentAdmin/MakeNote';
import Message from './componentAdmin/Message';



class AdminLandingPage extends Component {
    render() {
        return (
            <>
            <div className='AdminPage'>
            <Router>
                    <div className='bg-dark sidebar'>
                        <Sidebar/>
                    </div>
                <div className='Dashboard'>
                <Switch>
                    <Route exact path='/AdminPage'>
                            <Dashboard/>
                        </Route>
                        <Route path='/AdminPage/CreateOrder'>
                            <CreateOrder/>
                        </Route>
                        <Route path='/AdminPage/Create'>
                            <Create/>
                        </Route>
                        <Route path='/AdminPage/CreateUser'>
                            <CreateUser/>
                        </Route>
                        <Route path='/AdminPage/Notice'>
                            <MakeNote/>
                        </Route>
                        <Route path='/AdminPage/Message'>
                            <Message/>
                        </Route>
                        </Switch>
                </div>
                </Router>
                </div>
            </>
        );
    }
}

export default AdminLandingPage;