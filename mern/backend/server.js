const express = require("express")
const logger = require("morgan")
const dotenv = require("dotenv")
const path = require ('path')
const favicon =require('serve-favicon')

const app = express()



app.use(logger("dev"))
app.use(express.json())

dotenv.config()

const port = process.env.PORT

app.listen(port, () =>{
    console.log(`server started on port ${port}`)
})