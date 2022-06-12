const  express = require('express')
const router= express.Router()
const mytable= require('../Signupmodle')
const cors=require('cors')
router.post('/signup',(req,res)=>{
    console.log(req.body)
    const Signedup= new mytable({
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    })

    Signedup.save()
  
    .then(data=>{
        res.json({
            status : 200
        })
    })
    .catch(error=>{
        res.json(error)
    })
})


module.exports =router