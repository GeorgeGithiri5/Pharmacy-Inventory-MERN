const express = require('express');
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../config/keys")

const validateUserRigister = require("../Validation/EmployeeAuth/Register")
const validateLoginUser = require("../Validation/EmployeeAuth/Login")

const User = require('../model/UserModel')

router.get('/all',async(req,res)=>{
    const All = await User.find()
    res.json(All)
})

router.post('/register',(req,res)=>{
    const {errors,isValid} = validateUserRigister(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    User.findOne({email: req.body.email})
        .then(useer=>{if(useer){
            return res.status(400).json({email:"Email already Exist"})
        }else{
            const AddUser = new User({
                name: req.body.name,
                email: req.body.email,
                salary: req.body.salary,
                role: req.body.role,
                password: req.body.password
            })
            // console.log(AddUser)
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(AddUser.password,salt,(err,hash)=>{
                    if(err) throw err
                    AddUser.password = hash
                    // console.log(AddUser)
                    AddUser.save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err))
                })
            })
        }
    })
})

router.post('/login',(req,res)=>{
    const {errors,isValid} = validateLoginUser(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password

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
                                expiresIn:31556926
                            },
                            (err,token)=>{
                                res.json({
                                    success:true,
                                    token: "Bearer " + token
                                })
                            }
                        )
                    }else {
                        return res.status(400).json({
                            passwordincorrect: "Password Incorrect"
                        })
                    }
                })
        })
})

router.delete('/:UserId',async(req,res)=>{
    const DeleteUser = await User.remove({_id:req.params.UserId})
    res.json("Deleted")
})


module.exports = router