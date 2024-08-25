const express = require("express"); //importing express
const path = require("path");
const app = express(); //using the express method
const moment= require("moment");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUnitialised: false
});
require("dotenv").config()




mongoose.connect(process.env.DATABASE_LOCAL,{useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.once("open",()=>{
    console.log("mongoose connection open")
})
.on("error",(err)=>{
    console.error("oops",err)
})



app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());


const khari = require("./models/db")
const Db2 = require("./models/db2");
const startRoute = require ("./routes/startRoute");//importing routes
app.get("/", (req,res)=>{
 res.send("hello world")  
});
app.use("/", startRoute);//using routes




















app.listen(5000, ()=>{
console.log("server running on port 5000")
});
