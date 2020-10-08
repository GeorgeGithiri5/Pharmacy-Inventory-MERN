const express = require('express')
const passport = require('passport')
const router = express.Router()
const Sales = require('../models/Sales')

const salesValidation = require('../validation/Products/Sales')

router.get('/all',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Sales.find()
            .then(data=>{
                if(data === 0){
                    return res.status(404).json({nosales:"No sales"})
                }else{
                    return res.send(data)
                }
            })
            .catch(err=>console.log(err))
})

router.get('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Sales.findOne({_id:req.params.id})
            .then(data=>res.send(data))
            .catch(err=>console.log(err))
})

router.post('/addSales',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {errors,isValid} = salesValidation(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }
    const addSale = new Sales({
        name:req.body.name,
        quantity:req.body.quantity,
        amount:req.body.amount
    })
    addSale.save()
            .then(data=>res.send(data))
            .catch(err=>console.log(err))
})

router.post('/update/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Sales.findOneAndUpdate({_id:req.params.id})
            .then(data=>{
                data.name = req.body.name,
                data.quantity = req.body.quantity,
                data.amount = req.body.amount

                data.save()
                    .then(data=>res.send(data))
                    .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))
})

router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Sales.findOneAndDelete({_id:req.params.id})
            .then(()=>res.json({message:"Sales deleted"}))
            .catch(err=>console.log(err))
})

module.exports = router