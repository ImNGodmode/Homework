const express = require('express')

const app = express()
const fruits = require('./models/fruits.js')
const Show = require('./views/Show.jsx')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/fruits/', (req, res) =>{
    res.send(fruits)
})
// add a show route
app.get('/fruits/:indexOfFruitsArray', (req, res) =>{
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})



app.listen(3000, () => {
    console.log('Listning on port 3000')
})