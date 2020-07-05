import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import UserList from './UserList';

class CreateUser extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            email: "",
            salary: "",
            role: "",
            all: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/Users/all')
            .then(data=>{
                this.setState({
                    all:data.data
                })
            })
    }

    onChangeUsername=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    onChangeEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    onChangeSalary=(e)=>{
        this.setState({
            salary: e.target.value
        })
    }
    onChangeRole=(e)=>{
        this.setState({
            role: e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const postUser = {
            username: this.state.username,
            email: this.state.email,
            salary: this.state.salary,
            role: this.state.role
        }
        console.log(postUser)
        axios.post('http://localhost:8000/Users',postUser)
                window.location = '/AdminPage/CreateUser'
    }
    render() {
        const userlist = this.state.all.map(employee=>{
            return(
                            <tr key={employee._id}>
                                <td>{ employee.username }</td>   
                                <td>{ employee.email }</td>
                                <td>{ employee.salary }</td>
                                <td>{ employee.role }</td>
                                <td>
                                    <button className='btn btn-info'>Paid</button>
                                </td>
                            </tr>
            )
        })
        return (
            <>
               <div className='col-8 mx-auto'>
                   <div className='header'>
                       <h2 className='text-center'>Create An New Employee</h2>
                   </div>
                   <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label>
                                Username:
                            </label>
                            <input 
                            className='form-control' 
                            type="text" 
                            value = {this.state.username}
                            onChange= {this.onChangeUsername}
                            placeholder='Enter Username..'
                            required/>
                        </div>
                        <div className='form-group'>
                            <label>
                                Email:
                            </label>
                            <input 
                            className='form-control' 
                            type="mail" 
                            value={this.state.email}
                            onChange= {this.onChangeEmail}
                            placeholder='Enter Email..'
                            required/>
                        </div>
                        <div className='form-group'>
                            <label>
                                Salary:
                            </label>
                            <input 
                            className='form-control' 
                            type="mail" 
                            value={this.state.salary}
                            onChange= {this.onChangeSalary}
                            placeholder='Enter Salary..'
                            required/>
                        </div>
                        <div className='form-group'>
                            <label>
                                Role:
                            </label>
                            <input 
                            className='form-control' 
                            type="mail" 
                            value={this.state.role}
                            onChange= {this.onChangeRole}
                            placeholder='Enter Role..'
                            required/>
                        </div>
                        <button className='btn btn-dark' type='submit'>Add User</button>
                   </form>
                </div> 

                <hr/>
                <UserList>
                {userlist}
                </UserList>
            </>
        );
    }
}

export default CreateUser;