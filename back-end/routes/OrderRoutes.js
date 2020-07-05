const express = require('express')
const router = express.Router()
const Order = require('../model/OrderModel')

router.post('/',async(req,res)=>{
    const OrderPost = new Order({
        name:req.body.name,
        quantity: req.body.quantity,
        budget: req.body.budget
    })
    const save = await OrderPost.save()
                                .then(data=>{
                                    res.json("order added")
                                })
                                .catch(err=>{
                                    res.json(err)
                                })
})

router.get('/',async(req,res)=>{
    const getAll = await Order.find()
    res.json(getAll)
})

module.exports = router