const mongoose = require('mongoose')

const macrosSchema = new mongoose.Schema({
    calories: {type:String,required: true},
    protein: {type:String,required: true},
    carbs: {type:String,required: true},
    fats: {type:String,required: true},
})
// the Outline for ALL Macros we create/populate in dataset

const Macros = mongoose.model("Macros", macrosSchema)

module.exports = Macros