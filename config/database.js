const mongoose=require('mongoose')

const configDb=()=>{
    mongoose.connect('mongodb://localhost:27017/contact-manager',{ useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
console.log('connected to db')
})

.catch((err)=>{
    console.log(err)
})
}
module.exports=configDb