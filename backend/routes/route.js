//const { Router } = require('express')
const express = require('express')
const app = express()
const Router = express.Router()
const userc = require('../models/UserModel')

Router.post('/signup',(req,res)=>{
    const user = new userc({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    user.save()
})

Router.get('/signup')
module.exports = Router