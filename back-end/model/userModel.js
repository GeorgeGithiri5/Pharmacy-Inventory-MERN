const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("user",UserSchema)