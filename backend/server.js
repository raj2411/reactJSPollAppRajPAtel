const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routeurl = require('./routes/route')
const cors = require('cors')
const  dbURI = "mongodb+srv://raj:raj@cluster0.gdxwk.mongodb.net/mydb?retryWrites=true&w=majority"
app.use(express.json())


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})
//mongoose.connect('mongodb://localhost/test')

app.use(express.json())
app.use(cors())
app.use('/app', routeurl)
app.listen(4000,()=>console.log("running"))