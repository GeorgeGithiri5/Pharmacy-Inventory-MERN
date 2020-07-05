const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require ('body-parser')
const cors = require('cors')
const passport = require('passport')
const app = express()
const port = 8000;

// middlewares 
app.use(cors())
app.use(bodyParser.json())

// Routes
const UserRoute = require('./routes/UserRoute')
const AdminRoute = require('./routes/Admin')
const StoreRoute = require('./routes/ProductRoute')
const OrderRoute = require('./routes/OrderRoutes')
const AnnouncementRoute = require('./routes/AnnounceRoute')
app.use('/Announcement',AnnouncementRoute)
app.use('/Order',OrderRoute)
app.use('/Store',StoreRoute)
app.use('/Admin', AdminRoute) 
app.use('/Users',UserRoute)

// app.use(passport.initialize())
// require("./config/passport")(passport)

// connect to database 
mongoose.connect('mongodb://127.0.0.1:27017/Phamarcy-Inventory',()=>{
    console.log('Connected to database')
})

app.listen(port,()=>{
    console.log("Listening at Port: " + `${port}`);
})