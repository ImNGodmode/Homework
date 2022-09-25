const mongoose = require('mongoose')

const xboxSchema = new mongoose.Schema({
    title: {type:String,required: true},
    cost: {type:String,required: true},
    wasItGood: Boolean
})
// the Outline for ALL games we create/populate in dataset

const Xbox = mongoose.model("Xbox", xboxSchema)

module.exports = Xbox
