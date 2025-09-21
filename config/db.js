const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://shamil:urcx5298@mysnapgram.zq2yd.mongodb.net/MyCart')
    console.log('database connected')
}

module.exports = connectDB