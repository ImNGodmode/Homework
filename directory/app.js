const express = require("express")
const app = express()
//const people = require('./models/people.js')

const people = [
    {
        name: "john smith",
        age: 33,
        perscholasGrad: true
    },
    {
        name: "blake james",
        age: 33,
        perscholasGrad: true
    }, 
    {
        name: "jill jones",
        age: 21,
        perscholasGrad: true
    },
    {
        name: "some guy",
        age: 45,
        perscholasGrad: true
    }, 
    {
        name: "that girl",
        age: 25,
        perscholasGrad: true
    },
    {
        name: "sally short",
        age: 41,
        perscholasGrad: true
    },
    {
        name: "pat homes",
        age: 37,
        perscholasGrad: true
    },
    {
        name: "bill bill",
        age: 18,
        perscholasGrad: false
    },
    {
        name: "sabrina witch",
        age: 17,
        perscholasGrad: true
    },
    {
        name: "steph moore",
        age: 24,
        perscholasGrad: false
    },
    {
        name: "shannon shell",
        age: 30,
        perscholasGrad: true
    }
]

app.get('/people/', (req, res) =>{
    res.send(people)
})

app.get('/people/:indexOfPeopleArray', (req, res) => {
    res.send(people[req.params.indexOfPeopleArray])
})





app.listen(3000, () => {
    console.log('listning on port 3000')
} )