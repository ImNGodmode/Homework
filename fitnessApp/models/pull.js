const mongoose = require('mongoose')

const pullSchema = new mongoose.Schema({
    owner:{type: mongoose.Types.ObjectId, ref: "User", required: true},
    pulldowns: {type:String,required: true},
    cableRows: {type:String,required: true},
    latprayers: {type:String,required: true},
    rows: {type:String,required: true},
    preacherCurls: {type:String,required: true},
    spiderCurls: {type:String,required: true},
    woodchoppers: {type:String,required: true},
})
// the Outline for ALL Macros we create/populate in dataset

const Pull = mongoose.model("Pull", pullSchema)

module.exports = Pull 