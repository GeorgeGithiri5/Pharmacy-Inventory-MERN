import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {registerUseer} from '../actions/authActions'
import classnames from 'classnames'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            email:"",
            salary:"",
            role:"",
            password:"",
            password2:"",
            errors:{}
        }
    }
    // componentDidMount(){
    //     if(this.props.auth.isAuthenticated){
    //         this.props.history.push("/EmployeePage")
    //     }
    // }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange= e =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    onSubmit= e =>{
        e.preventDefault()
        const register = {
            name: this.state.name,
            email:this.state.email,
            salary:this.state.salary,
            role:this.state.role,
            password:this.state.password,
            password2:this.state.password2
        }
        this.props.registerUseer(register,this.props.history)
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="col-10 mx-auto">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Name:</label>
                                <span className="alert alert-danger">
                                    {errors.name}
                                </span>
                        <input className={classnames("form-control",{invalid:errors.name})}
                        id="name"
                        value={this.state.name}
                        onChange = {this.onChange}
                        type = "text"
                        error = {errors.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Email:</label>
                                <span className="alert alert-danger">
                                    {errors.email}
                                </span>
                        <input className={classnames("form-control",{invalid:errors.email})}
                        id="email"
                        value={this.state.email}
                        onChange = {this.onChange}
                        type = "email"
                        error = {errors.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Salary:</label>
                        <input className="form-control"
                        id="salary"
                        value={this.state.salary}
                        onChange = {this.onChange}
                        type = "text"
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Role:</label>
                        <input className="form-control"
                        id="role"
                        value={this.state.role}
                        onChange = {this.onChange}
                        type = "text"
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Password:</label>
                        <span className="alert alert-danger">
                                    {errors.password}
                                </span>
                        <input className={classnames("form-control",{invalid:errors.password})}
                        id="password"
                        value={this.state.password}
                        onChange = {this.onChange}
                        type = "password"
                        error = {errors.password}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                            <span className="alert alert-danger">
                                {errors.password2}
                            </span>
                        <input className={classnames("form-control",{invalid:errors.password2})}
                        id="password2"
                        value={this.state.password2}
                        onChange = {this.onChange}
                        type = "password"
                        error = {errors.password2}
                        />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUseer: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth,
    errors:state.errors
})

export default connect(
    mapStateToProps,
    {registerUseer}
)(withRouter(Register))