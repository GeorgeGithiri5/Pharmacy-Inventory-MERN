import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {loginUseer} from '../actions/authActions'
import classnames from 'classnames'
import BannerHolder from '../components/BannerHolder'
import Banner from "../components/Banner"

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push("/Record")
        }
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }
    onChange=e=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmit = e =>{
        e.preventDefault()
        const Login = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUseer(Login)
    }
    render() {
        const {errors} = this.state
        return (
            <>
            <BannerHolder bannerclass='mainBanner'>
                    <Banner>
                    <div className="col-10 mx-auto">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Email:</label>
                        <span>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                        <input className={classnames("form-control",{invalid:errors.email || errors.emailnotfound})}
                        id="email"
                        value={this.state.email}
                        onChange = {this.onChange}
                        type = "email"
                        error = {errors.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Password:</label>
                            <span className="text-danger">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
                        <input className={classnames("form-control",{invalid:errors.password || errors.passwordincorrect})} 
                        id="password"
                        value={this.state.password}
                        onChange = {this.onChange}
                        type = "password"
                        error = {errors.password}
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">
                        Login
                    </button>
                </form>
            </div>
                    </Banner>
            </BannerHolder>
            </>
        );
    }
}

Login.propTypes = {
    loginUseer: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {loginUseer}
)(Login)