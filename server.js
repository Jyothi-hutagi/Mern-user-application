const express=require("express");
const bodyparser=require('body-parser')
const app=express();
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://jyothi-hutagi:jyothi@cluster0.kceuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

.then(()=>{
  console.log(`connected to database`);
})
.catch((e)=>{
  console.log(e);
})

const router= require('./Backendserver/modles/Router/routes')
const candidates =require('./Backendserver/modles/Router/candidateroute')

const cors = require('cors')
app.use(cors())


const port= process.env.PORT||4000;
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use('/',router)
app.use('/',candidates)
app.get("/",(req,res)=>{
    res.send("hello")
});
app.listen(port, () =>{ 
    console.log(`Server is up and running at port no ${port}`)
});