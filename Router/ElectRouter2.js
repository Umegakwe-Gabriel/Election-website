const express = require("express")
const { AllElections, Election } = require("../Controller/ElectionController2")

const router = express.Router()
router.route("/AllElect").get(AllElections)
router.route("/newElection").post(Election)

module.exports = router