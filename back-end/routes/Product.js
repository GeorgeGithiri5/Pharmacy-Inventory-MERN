const express = require('express');
const router = express.Router()
const passport = require('passport')
const mongoose = require('mongoose')

const Admin = require('../models/Admin')
const Products = require("../models/Products")

const ProductValidate = require("../validation/Products/Product")


// Get Route
router.get('/all',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Products.find()
            .then(data=>{
                if(!data){
                   return res.status(404).json({message:"No Products In Store"})
                }else{
                    return res.send(data)
                }
            })
            .catch(err=>console.log(err))
})
// Get by ID
router.get('/:product_id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Products.findOne({_id:req.params.product_id})
            .then(data=>{
                if(!data){
                    errors.nosuchdata = "No such data in the database"
                }else{
                    return res.status(200).send(data)
                }
            })
            .catch(err=>console.log(err))
})

// Post Data
router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {errors,isValid} = ProductValidate(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }

    const newData = new Products({
        productname:req.body.productname,
        quantity:req.body.quantity,
        amount:req.body.amount,
        deliveredby:req.body.deliveredby
    })
    newData.save()
            .then(data=>res.send(data))
            .catch(err=>console.log(err))
})

// update
router.post('/update/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Products.findByIdAndUpdate({_id:req.params.id})
            .then(update=>{
                update.productname = req.body.productname,
                update.quantity = req.body.quantity,
                update.amount = req.body.amount,
                update.deliveredby = req.body.deliveredby

                update.save()
                        .then(data=>res.send(data))
                        .catch(err=>console.log(err))
            })
})

// Delete

router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Products.findByIdAndDelete({_id:req.params.id})
            .then(()=>res.json({message: "the product was deleted"}))
            .catch(err=>console.log(err))
})

module.exports = router