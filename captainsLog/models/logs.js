const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    name: {type:String,required: true},
    gpa: {type:String,required: true},
    isPassing: Boolean
})
// the Outline for ALL students we create/populate in dataset

const Logs = mongoose.model("Logs", logsSchema)

module.exports = Logs