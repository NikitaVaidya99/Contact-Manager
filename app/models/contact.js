const mongoose=require('mongoose') 
const validator=require('validator')
const Schema=mongoose.Schema

const contactSchema=new Schema({
    contactNumber:{
        type:String,
        maxlength:10,
        required:true
    },
    name:{
        type:String,
        minlength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return'invalid email'
            }
        }

    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    }
})

const Contact=mongoose.model('Contact',contactSchema)
module.exports={Contact}