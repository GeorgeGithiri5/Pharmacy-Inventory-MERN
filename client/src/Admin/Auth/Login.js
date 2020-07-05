import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {loginUser} from '../../actions/authActions'
import classnames from 'classnames'
import BannerHolder from '../../components/BannerHolder'
import Banner from "../../components/Banner"
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password: "",
            errors:{}
        }
    }
    // componentDidMount(){
    //     if(this.props.auth.isAuthenicated){
    //         this.props.history.push('/AdminPage')
    //     }
    // }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/AdminPage')
        }
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange= e =>{
        this.setState({ [e.target.id] : e.target.value})
    }
    onSubmit = e =>{
        e.preventDefault()
        const Admin = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(Admin)
    }
    render() {
        const {errors} = this.state
        return (
            <>
                <BannerHolder bannerclass='mainBanner'>
                    <Banner>
                    <p className="lead">ABC Pharmarcy Inventrory Admin Login.</p>
                        <p className="lead">If no account: 
                            <Link className="btn btn-outline-dark btn-sm btn-warning" to="/AdminRegister">Create Account</Link>
                        </p>
                    <div className="col-10 mx-auto">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Email:</label>
                        <span className="text-danger">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                        <input className={classnames("form-control",{invalid: errors.email || errors.emailnotfound})}
                            id="email"
                            type="email"
                            onChange={this.onChange}
                            value = {this.state.email}
                            errors = {errors.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Password:</label>
                        <span className="text-danger">
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
                        <input className={classnames("form-control",{invalid: errors.password || errors.passwordincorrect})}
                            id="password"
                            type="password"
                            onChange={this.onChange}
                            value = {this.state.password}
                            errors = {errors.password}
                        />
                    </div>
                    <button className="btn btn-info" type="submit">Login</button>
                </form>
            </div>
                    </Banner>
               </BannerHolder>
            </>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {loginUser}
)(Login)