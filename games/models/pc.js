const mongoose = require('mongoose')

const pcSchema = new mongoose.Schema({
    title: {type:String,required: true},
    cost: {type:String,required: true},
    wasItGood: Boolean
})
// the Outline for ALL games we create/populate in dataset

const Pc = mongoose.model("Pc", pcSchema)

module.exports = Pc