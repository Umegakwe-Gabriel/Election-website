const express = require("express")
require("./Config/database2")
const ElectRouter2 = require("./Router/ElectRouter2")

const port = 5400

const app = express()
app.use(express.json())
.use("/api", ElectRouter2)

app.get("/", (req, res)=>{
res.status(200).json({message: "server is up and running"})
})

app.listen(port, ()=>{
    console.log("server is listening", port);
})