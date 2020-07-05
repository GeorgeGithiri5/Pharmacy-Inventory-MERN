const express = require('express')
const router = express.Router()
const AnnounceModel = require('../model/Announcement')

router.get('/',async (req,res)=>{
    const getAll = await AnnounceModel.find()
    res.json(getAll)
})

router.post('/',async(req,res)=>{
    const newAnnouncement = new AnnounceModel({
        title: req.body.title,
        announcement: req.body.announcement
    })
    const save = newAnnouncement.save()
                                .then(data=>{
                                    res.json("Announcement Added")
                                })
                                .catch(err=>{
                                    res.json({"message":err})
                                })
})

module.exports = router