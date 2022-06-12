const mongoose= require('mongoose')
const Signuptemplate= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('mytable',Signuptemplate)