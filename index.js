const express = require('express')
const app = express()
require("./config/dataBase")
const authRouter=require("./routes/auth")
const jobRouter=require("./routes/job")
app.use(express.json())
app.use(authRouter)
app.use(jobRouter)
app.listen(8000,()=>{
    console.log("server Started at 8000 port");
})