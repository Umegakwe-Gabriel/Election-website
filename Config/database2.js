const mongoose = require("mongoose")

const ElectDBs = "mongo://0.0.0.0:27017/ElectionDatabase"

const Database = async()=>{
    try {
        const eDBS = await mongoose.connect(ElectDBs)
        console.log(`Database is connected to ${eDBS.connection.host}`);
    } catch (error) {
        console.log("An error in  connecting to database");
    }
}

module.exports = Database();