const mongoose = require("mongoose")

const ElectSchema = mongoose.Schema({
    
    candidate: {
        type: String
    },
    votes: {
        type: String
    },
    party: {
        type: String
    },
    motto: {
        type: String,
        unique: true
    },
    representative: {
        type: String
    },

}, {timestamps: true})

const ElectionModel = mongoose.model("Election Votes", ElectSchema)

module.exports = ElectionModel