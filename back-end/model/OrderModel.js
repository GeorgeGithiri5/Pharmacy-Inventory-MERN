const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Orders",OrderSchema)