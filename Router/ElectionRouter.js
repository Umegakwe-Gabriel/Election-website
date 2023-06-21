const express = require("express")
const { AllElections, firstElect } = require("../Controller/ElectionController")

const Electrouter = express.Router()
Electrouter.route("/AllElections").get(AllElections)
Electrouter.route("/newElection").post(firstElect)

module.exports = Electrouter