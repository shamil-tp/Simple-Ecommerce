const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    id:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
        default:'Category'
    },
})

module.exports = mongoose.Model('Category',categorySchema);