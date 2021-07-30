const mongoose = require('mongoose')

const UserTemplate = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:Date.now,
    }
})

module.exports = mongoose.model('User', UserTemplate)