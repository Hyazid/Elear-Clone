import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import fs from 'fs';

const morgan = require("morgan");
require("dotenv").config();


//create express app
const app = express()
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// connect to moongosedb
mongoose.connect("mongodb://localhost:27017/elearning",{

    
   
    useUnifiedTopology: true,
   
}).then(()=>{console.log("Connction to DB")})
.catch((err)=>{console.log(" DB connection eroor=>", err)})
//use personnal middle ware 
app.use((req, res, next)=>{
    console.log("tazid middleware")
    next();
})

//route
fs.readdirSync('./routes').map((r)=>{app.use("/api", require("./routes/"+r))})

// port listener
const port =process.env.PORT || 3001;
app.listen(port, ()=>{console.log("server runnig on "+port+"...")})