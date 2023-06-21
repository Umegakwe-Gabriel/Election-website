const express = require("express")
const ElectModel = require("../Model/ElectionModel")

const AllElections = async(req, res)=>{
    try {
        const getElections = await ElectModel.find()
        res.status(200).json({message: "These are the users", data: getElections})
    } catch (error) {
        res.status(400).json({message: "Couldn't get all users", error})
    }
}

const firstElect = async (req, res)=>{
    try {
        const {candidate, votes, party, representative, motto} = req.body;
        const firstElection = await ElectModel.create({
            candidate, votes, representative, party, motto
        })
        res.status(200).json({message: "Gotten data for first election", data: firstElection})
    } catch (error) {
        res.status(400).json({message: "couldn't prepare the election report", error})
    }
}

module.exports = {AllElections, firstElect}