const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require("mongoose")
const Admin = mongoose.model('AdminSchema')
const keys = require('./keys')
const opt = {}
opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opt.secretOrKey = keys.secretOrKey

module.exports = passport =>{
    passport.use(
        new JwtStrategy(opt,(jwt_payload,done)=>{
            Admin.findById(jwt_payload.id)
                .then(user=>{
                    if(user){
                        return done(null,user)
                    } return done(null,false)
                })
                .catch(err=>console.log(err))
        })
    )
}