const express = require("express")
const ElectModel = require("../Model/ElectionModel2")

const AllElections = async(req, res)=>{
    try {
        const getAllElections = await ElectModel.find()
        res.status(200).json({
            message: "These are all the elections", data: getAllElections
        })
    } catch (error) {
        res.status(400).json({message: "couldn't get all elections"})
    }
}

const Election = async(req,res)=>{
    try {
        const {representative, candidate, votes, party, motto}= req.body;
        const Elect = await ElectModel.create({
            representative, candidate, votes, party, motto
        })
        res.status(200).json({message: "Prepared election report", data: Elect})
    } catch (error) {
        res.status(400).json({message: "Couldn't process election result", error})
    }
}

module.exports = {AllElections, Election}