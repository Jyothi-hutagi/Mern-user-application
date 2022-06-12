const  express = require('express')
const router= express.Router()
const mydata= require('../Candidatemodle')
router.post('/candidate',(req,res)=>{
    console.log(req.body)
    const candidatereq= new mydata({
        name:req.body.name,
        address:req.body.address,
        dob:req.body.dob,
        state:req.body.state,
        age:req.body.age,
        pincode:req.body.pincode
    })
    candidatereq.save()
  
    .then(data=>{
        res.json()
        
    })
    .catch(error=>{
    res.json(error)
    })
})


module.exports =router