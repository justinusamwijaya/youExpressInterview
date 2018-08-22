require("dotenv").config()
let express = require("express")
let app = express()
let routes = require('./routes')
let mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.username}:${process.env.password}@ds043022.mlab.com:43022/youextransportations`)

app
.set('view engine', 'ejs')
.use(express.urlencoded({extended:true}))
.use(express.json())
.use('', routes)


app.listen(3000, console.log("listening to 3000"))