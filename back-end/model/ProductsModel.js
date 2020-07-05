const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    quantity:{
        type: String,
        required:true
    },
    deliveredBy:{
        type: String,
        required:true
    },
    deliverEmail:{
        type: String,
        required:true
    },
    receivedBy: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model("Store",ProductSchema)