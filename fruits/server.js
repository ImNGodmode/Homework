const express = require('express')

const app = express()
const fruits = require('./models/fruits.js')



app.get('/fruits/', (req, res) =>{
    res.send(fruits)
})
// add a show route
app.get('/fruits/:indexOfFruitsArray', (req, res) =>{
    res.send(fruits[req.params.indexOfFruitsArray])
})



app.listen(3000, () => {
    console.log('Listning on port 3000')
})