const express = require("express");
const connectDB = require("./config/database")
const app = express();





connectDB()
    .then(()=>{
        console.log("Database Connection success....");

        app.listen(3000,()=>{
            console.log("server runing successfully listening on port 3000.....")
    })
    })
    .catch((err)=>{
        console.error("Database cannot bec connected!!!")
    })