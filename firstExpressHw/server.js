const express = require("express")
const app = express()

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
} )

// Greetings

// app.get('/greeting', (req,res) => {
//     res.send('<h1>Hello, stranger!</h1>')
// } )

// app.get('/greeting/:name', (req,res) => {
//     res.send(`<h1>Hello, ${req.params.name} nice to see you!</h1>`)
// } )

// Tip Calculator idk htf to trouble shoot this cant use just the param as a number and have tried parseint and number to conver to a number value to be able to use


// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     const tipPercentage = req.params.tipPercentage
//     const total = req.params.total
//     let a = parseInt(tipPercentage)
//     const b = parseInt(total)
//     a = a/100

//     const tip = (b * a).toString()
    
//     res.send(tip)
//    })

    // Magic 8 ball
    // let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    // app.get('/magic/:question', (req,res) => {
    //         let l = answers.length
    //         let m = Math.floor(Math.random()*l)
    //         res.send(`<h1>${req.params.question} <br> ${answers[m]} </h1>`)
    //     } )



app.listen(3000, () => {
    console.log('listning on port 3000')
})