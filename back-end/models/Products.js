const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    deliveredby:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('products',ProductSchema)