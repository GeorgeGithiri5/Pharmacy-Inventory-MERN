import axios from "axios"
import setAuthToken from '../Utils/setToken'
import jwt_decode from 'jwt-decode'

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from './types'

export const registerUser = (userData,history)=> dispatch=>{
    axios.post("/Admin",userData)
            .then(res=>{
                history.push("/AdminLogin")
            })
            .catch(err=>dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}

export const loginUser = userData =>dispatch=>{
    axios.post("/Admin/login",userData)
        .then(res=>{
            const {token} = res.data
            localStorage.setItem("jwtToken",token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        )
}

export const setCurrentUser = decoded =>{
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setUserLoading = ()=>{
    return {
        type:USER_LOADING
    }
}

export const logoutUser = ()=>
    dispatch=>{
        localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}

export const registerUseer = (userData,history)=>dispatch=>{
    axios.post('/Users/register',userData)
        .then(res=>history.push('/UserLogin'))
        .catch(err=>dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        }))
}

export const loginUseer = userData =>dispatch=>{
    axios.post('/Users/login',userData)
            .then(res=>{
                const {token} = res.data
                localStorage.setItem("jwtToken",token)
                setAuthToken(token)
                const decoded = jwt_decode(token)
                dispatch(setCurrentUseer(decoded));
            })
            .catch(err=>dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            }))
}

export const setCurrentUseer = decoded=>{
    return{
        type: SET_CURRENT_USER,
        payload:decoded
    }
}

export const setUseerLoading = ()=>{
    return {
        type:USER_LOADING
    }
}

export const logoutUseer = ()=>dispatch=>{
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}