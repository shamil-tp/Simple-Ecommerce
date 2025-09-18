const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    id:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
        default:'Admin'
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
})

module.exports = mongoose.Model('Admin',adminSchema);