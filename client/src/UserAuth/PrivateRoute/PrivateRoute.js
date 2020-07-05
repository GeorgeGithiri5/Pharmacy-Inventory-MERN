import React, { Component } from "react"
import {Route,Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRouteUser = ({
    component:Component, auth,
    ...rest})=>(
        <Route 
            {...rest}
            render= {props=>
                auth.isAuthenticated === true ? (
                    <Component {...props}/>
                ):(
                    <Redirect to = '/UserLogin'/>
                )
            }
        />
    )

    PrivateRouteUser.propType = {
        auth: PropTypes.object.isRequired
    }

    const mapStateToProps = state =>({
        auth: state.auth
    })

    export default connect(
        mapStateToProps
    )(PrivateRouteUser)
