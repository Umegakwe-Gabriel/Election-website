const express = require("express")
require("./Config/database")
const ElectRouter = require("./Router/ElectRouter2")

const port = 2000

const app = express()
app.use(express.json())
.use("/api", ElectRouter)

app.get("/", (req, res)=>{
    res.status(200).json({message: "Server is up "})
})

app.listen(port, ()=>{
    console.log("Server is listening", port);
})