const express = require('express')
const router = express.Router()
const Product = require('../model/ProductsModel')

router.get('/',async(req,res)=>{
    const AllProducts = await Product.find()
    res.json(AllProducts)
})

router.post('/post',async (req,res)=>{
    const AddItem = new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        deliveredBy: req.body.deliveredBy,
        deliverEmail: req.body.deliverEmail,
        receivedBy: req.body.receivedBy
    })
    const save = await AddItem.save()
                                .then(data=>{
                                    res.status(200).json("Product Added")
                                })
                                .catch(err=>{
                                    res.json(err)
                                })
})

router.get('/:ProductId',async(req,res)=>{
    const spec = await Product.findById(req.params.ProductId)
    res.json(spec)
})

router.delete('/:ProductId',async(req,res)=>{
    const delProduct = await Product.remove({_id: req.params.ProductId})
    res.json(delProduct)
})
router.post('/:ProductId',async(req,res)=>{
    const update = await Product.findById(req.params.ProductId)
        .then((item)=>{
            item.name= req.body.name
            item.price= req.body.price
            item.quantity = req.body.quantity
            item.deliveredBy = req.body.deliveredBy
            item.deliverEmail = req.body.deliverEmail
            item.receivedBy = req.body.receivedBy

            item.save()
                .then(data=>{
                    res.send("Updated")
                })
                .catch(err=>{
                    res.send(err)
                })
        })
})

module.exports = router