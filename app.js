const express = require('express')
const app = express();
const authRoute = require('./routes/auth')

app.set('view engine','ejs')
app.set('views','views')

const PORT = 3000;
const HOSTNAME = 'localhost'

app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())

app.use('/',authRoute)


app.listen(PORT,()=>{
    console.log(`app is woriking on http://${HOSTNAME}:${PORT} `)
})