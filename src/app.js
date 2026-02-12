const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("hello from the server!!! hey you")
})

app.get("/test",(req,res)=>{
    res.send("test")
})

app.get("/hello",(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("server is running successfully!!!")
})