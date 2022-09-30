const mongoose = require('mongoose')

const legsSchema = new mongoose.Schema({
    owner:{type: mongoose.Types.ObjectId, ref: "User", required: true},
    squats: {type:String,required: true},
    legPress: {type:String,required: true},
    calfRaise: {type:String,required: true},
    hipThrust: {type:String,required: true},
    abCoaster: {type:String,required: true},
})
// the Outline for ALL Legs we create/populate in dataset

const Legs = mongoose.model("Legs", legsSchema)

module.exports = Legs 