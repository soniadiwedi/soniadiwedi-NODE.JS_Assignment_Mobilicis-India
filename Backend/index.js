
const express=require("express")
const { connection } = require("./connection/db")
const { router } = require("./controller/user.controller")
const app=express()
const cors = require("cors");
require("dotenv").config()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("home page");
})


app.use("/income",router)
app.use("/price",router)
app.use("/m",router)
app.use("/digit",router)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
    console.log(`server is running ${process.env.port}`);
})