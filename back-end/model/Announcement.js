const mongoose = require('mongoose')

const AnnouncementSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    announcement:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Announcements",AnnouncementSchema)