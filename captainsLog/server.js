const express = require ('express')
const app = express()

const mongoose = require ('mongoose')

const methodOverride = require ('method-override')
const Logs = require('./models/logs')

require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//parse req.body
app.use(express.urlencoded({extended: false}))

//instantiates MethodOverride for crud actions
app.use(methodOverride('_method'))


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


//index
app.get('/logs', (req, res)  => {
    Logs.find({},(err,allLogs) =>{
        console.log(err)
        res.render('Index', {
            logs: allLogs
        })
    })
})

//new
app.get('/logs/new', (req, res) => {
    res.render('New', {})
})




app.listen(3000, () => {
    console.log('listning on port 3000')
})