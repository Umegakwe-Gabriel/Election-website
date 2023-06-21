const mongoose = require("mongoose")

const ElectDB = "mongodb://0.0.0.0:27017/ElectionDatabase"

const Database = async()=>{
    try {
        const eDB = await mongoose.connect(ElectDB)
        console.log(`Database is connected to ${eDB.connection.host}`);
    } catch (error) {
        console.log("Couldn't connect to database", error);
    }
}

module.exports = Database();