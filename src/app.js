const express = require("express");

const app = express();

app.use("/user",
    (req,res,next)=>{
    //res.send("responding from server 1")
    console.log("server 1");
    next();
},
    (req,res,next)=>{
    //res.send("responding from server 2")
    console.log("server 2");
    next();
},
    (req,res,next)=>{
    //res.send("response from sever 3")
    console.log("server 3")
    next()
},
    (req,res,next)=>{
    //res.send("respinse from server 4")
    console.log("server 4")
    next();
},
    (req,res,next)=>{
    res.send("response 5")
    
})


app.listen(3000,()=>{
    console.log("server is running successfully!!!")
})