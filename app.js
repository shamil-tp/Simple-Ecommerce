const express = require('express')
const app = express();
const authRoute = require('./routes/auth');
const adminRoute = require('./routes/admin');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const { adminOnly } = require('./middlewares/auth');


app.set('view engine','ejs')
app.set('views','views')

const PORT = 3000;
const HOSTNAME = 'localhost'

app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())

app.use('/',authRoute)
app.use('/admin',adminOnly,adminRoute)


app.listen(PORT,()=>{
    console.log(`app is woriking on http://${HOSTNAME}:${PORT} `)
    connectDB()
})