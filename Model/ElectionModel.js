const mongoose = require("mongoose")

const ElectionSchema = mongoose.Schema({
candidate: {
    type: String
},
party: {
    type: String
},
votes: {
    type: Number
},
motto:{
    type: String,
    unique: true
},
representative:{
    type: String
},
}, {timestamps: true})

const ElectionModel = mongoose.model("Election", ElectionSchema)

module.exports = ElectionModel