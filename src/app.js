const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName:"akshay",lastName:"saini"})
})

app.post("/user",(req,res)=>{
    //saving data to DB
    res.send("Data succesfully saved to the DataBase!")
})

app.delete("/user",(req,res)=>{
    res.send("data deledted successfully!!!")
})

app.listen(3000,()=>{
    console.log("server is running successfully!!!")
})