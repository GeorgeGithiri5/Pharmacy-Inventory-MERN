import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {registerUser} from '../../actions/authActions'
import classname from "classnames"
import BannerHolder from '../../components/BannerHolder'
import Banner from "../../components/Banner"

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password:"",
            password2: "",
            errors: {}
        }
    }
    componentDidMount(){
        if(this.props.auth.isAuthenicated){
            this.props.history.push('/AdminPage')
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }
    onChange = e =>{
        this.setState({ [e.target.id] : e.target.value })
    }
    onSubmit=e=>{
        e.preventDefault()
        const newAdmin = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        // console.log(newAdmin)
        this.props.registerUser(newAdmin,this.props.history)
    }
    render() {
        const {errors} = this.state
        return (
            <>
                <BannerHolder bannerclass='mainBanner'>
                    <Banner>
                        <p className='lead'>Hello,Create An Account Today To be an Admin</p>
                        <p>Already Have An Account: 
                            <Link className='btn btn-outline-warning' to='/AdminLogin'>Login</Link>
                        </p>
                    <div className = 'col-lg-8 mx-auto'>
                        <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Name:</label>
                        <span className="text-danger">{errors.name}</span>
                        <input className={classname('form-control',{invalid:errors.name})}
                            type="text"
                            onChange={this.onChange}
                            value={this.state.name}
                            id = "name"
                            errors={errors.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Email:</label>
                        <span className="text-danger">{errors.email}</span>
                        <input className={classname('form-control',{invalid:errors.email})}
                            type="email"
                            onChange={this.onChange}
                            value={this.state.email}
                            id = "email"
                            errors={errors.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Password:</label>
                        <span className="text-danger">{errors.password}</span>
                        <input className={classname('form-control',{invalid:errors.password})}
                            type="password"
                            onChange={this.onChange}
                            value={this.state.password}
                            id = "password"
                            errors={errors.password}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <span className="text-danger">{errors.password2}</span>
                        <input className={classname('form-control',{invalid:errors.password2})}
                            type="password"
                            onChange={this.onChange}
                            value={this.state.password2}
                            id = "password2"
                            errors={errors.password2}
                        />
                    </div>
                    <button type='submit' className='btn btn-warning'>Sign Up</button>
                </form>
            </div>
                    </Banner>
               </BannerHolder>
            </>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {registerUser}
)(withRouter(Register));