require("dotenv").config()
var express=require("express");


var connectToDatabase = require("./database/db");
var passworden=require("./routers/passworden-router");
var cors=require("cors");



var app=express();


//connect to the dataBase

connectToDatabase()
//add the Middle ware


app.use(express.json())
app.use("/api/passworden",passworden)
app.use(cors())



var PORT=process.env.PORT || 4040
app.listen(PORT,()=>{
    console.log("The surver is Running")
})



