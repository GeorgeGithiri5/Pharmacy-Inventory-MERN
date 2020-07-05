const express = require('express')
const router = express.Router()
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const validateRegisterInput = require('../Validation/AdminAuth/Register')
const validateLoginInput = require('../Validation/AdminAuth/Login')

const Admin = require('../model/Admin')

router.post('/' ,(req,res)=>{
    const {errors,isValid} = validateRegisterInput(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }
    Admin.findOne({email:req.body.email})
        .then(admiin=>{if(admiin){
            return res.status(400).json({email:"Email Already Exist"})
        }else{
            const AddAdmin = new Admin({
                name:req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            console.log(AddAdmin)
            // Hash The password 
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(AddAdmin.password,salt,(err,hash)=>{
                    if(err) throw err
                    AddAdmin.password = hash
                    console.log(AddAdmin)
                    AddAdmin.save()
                            .then(Admin=>res.json(Admin))
                            .catch(err=>console.log(err))
                })
            })
        }
        })

})

router.post('/login',(req,res)=>{
    const {errors,isValid} = validateLoginInput(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password

    // Find User
    Admin.findOne({email})
        .then(adminc=>{
            if(!adminc){
                return res.status(404).json({emailnotfound:"Email not found"})
            }
            bcrypt.compare(password,adminc.password)
                .then(isMatch=>{
                    if(isMatch){
                        const payload = {
                            id: adminc.id,
                            name:adminc.name
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
                                    token:"Bearer" + token
                                })
                            }
                        )
                    }else{
                        return res.status(400).json({
                            passwordIncorrect: "Password Incorrect"
                        })
                    }
                })
        })
})

router.get('/',async(req,res)=>{
    const Admiin = await Admin.find()
    res.json(Admiin)
})
module.exports = router