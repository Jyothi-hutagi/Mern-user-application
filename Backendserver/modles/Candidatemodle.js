const mongoose= require('mongoose')
const Candidatetemplate= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('mydata',Candidatetemplate)