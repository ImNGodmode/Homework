// require statements
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require ('method-override')
require('dotenv').config()
const User = require('./models/user')

//view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('public'));

//database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//Dashboard

app.get('/', (req, res)  => {
    User.find({},(err,users) =>{
        console.log(err)
        res.render('Index', {
            users: users
        })
    })
})

// new user

app.get('/user/new', (req, res) => {
    res.render('NewUser.jsx', {})
})

app.listen(3000, () => {
    console.log('listning on port 3000')
})