const express = require("express")
const app = express()
// let beer = []
// for (i=0; i < 99; i++){
//     beer.push(i)
//     console.log(beer)
// }

app.get('/', (req,res) => {
    res.send(`<h1> 99 Bottles of beer on the wall </h1> <a href = /98>take one down pass it around</a>`)
})

app.get('/0', (req,res) => {
    res.send(`<h1> 0 Bottles of beer on the wall </h1> <a href = />B double E double RUN BEER RUN!!!</a>`)
})

app.get('/:Beer', (req,res) => {
    let oneDown = parseInt(req.params.Beer)-1
    res.send(`<h1> ${req.params.Beer} Bottles of beer on the wall </h1> <a href = /${oneDown}>take one down pass it around</a>`)
})






app.listen(3000, () => {
    console.log("listning on port 3000")
})