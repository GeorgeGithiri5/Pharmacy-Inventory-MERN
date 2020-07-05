const express = require('express');
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../model/userModel')

const registerAuth = require('../validation/register')
const LoginAuth = require('../validation/Login')

// register End Point
router.post('/register',(req,res)=>{
    const {errors,isValid} = registerAuth(req.body)

    // Validate
    if(!isValid){
        return res.status(400).json(errors)
    }
    User.findOne({email:req.body.email})
        .then(user=>{
            if(user){
                return res.status(400).json({
                    email: "Email Already Exist"
                })
            }else{
                const newUser = new User({
                    name:req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                // Hash Password
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err
                        newUser.password = hash
                        newUser.save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err))
                    })
                })
            }
        })
})

// User login EndPoint
router.post("/login",(req,res)=>{
    const {errors,isValid} = LoginAuth(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password

    // find Userby Email
    User.findOne({email})
        .then(user=>{
            if(!user){
                return res.status(404).json({
                    emailnotfound: "Email Not Found"
                })
            }
            bcrypt.compare(password,user.password)
                    .then(isMatch=>{
                        if(isMatch){
                            const payload = {
                                id:user.id,
                                name:user.name
                            }
                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                {
                                    expiresIn: 31556926
                                },
                                (err,token)=>{
                                    res.json({
                                        success:true,
                                        token: "Bearer" + token
                                    })
                                }
                            )
                        } else {
                            return res.status(400).json({
                                passwordincorrect: "Password InCorrect"
                            })
                        }
                    })
        })
})

module.exports = router