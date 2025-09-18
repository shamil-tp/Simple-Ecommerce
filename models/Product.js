const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
        default:'Product'
    },
    price:{
        type:Number,
    },
    image:{
        id:{
            type:String,
        },
        url:{
            type:String,
        },
    }
})

module.exports = mongoose.Model('Product',productSchema);