const JWTStratery = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const passport = require('passport')
const Admin = mongoose.model('admin')
const keys = require('../config/keys')

const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey

module.exports = passport =>{
    passport.use(
        new JWTStratery(opts,(jwt_payload,done)=>{
            Admin.findById(jwt_payload.id)
                .then(admin=>{
                    if(admin){
                        return done(null,admin)
                    }
                    return done(null,false)
                })
                .catch(err=>console.log(err))
        })
    )
}