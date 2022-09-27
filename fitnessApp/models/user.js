const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type:String,required: true},
    lastName: {type:String,required: true},
    age: {type:String,required: true},
    isMale: Boolean,
    useHormones: Boolean,
})
// the Outline for ALL games we create/populate in dataset

const User = mongoose.model("User", userSchema)

module.exports = User