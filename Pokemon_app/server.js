const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.js")


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})
app.get('/pokemon', (req, res) => {
    res.render('Index.jsx', {pokemon: pokemon})
})
app.get('/pokemon/:id', (req, res) => {
    res.render('Show.jsx', {poke: pokemon[req.params.id]})
})




app.listen(3000, () => {
    console.log("listning on port 3000")
})
