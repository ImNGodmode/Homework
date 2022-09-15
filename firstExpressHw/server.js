const express = require("express")
const app = express()



app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
} )

app.get('/greeting', (req,res) => {
    res.send('<h1>Hello, stranger!</h1>')
} )

app.get('/greeting/:name', (req,res) => {
    res.send(`<h1>Hello, ${req.params.name} nice to see you!</h1>`)
} )

app.listen(3000, () => {
    console.log('listning on port 3000')
})