const {Contact}=require('../models/contact')
const {User}=require('../models/user')

module.exports.create=function(req, res){
    const body=req.body

    const contact=new Contact(body)
    contact.user=req.user._id
    contact.save()
    .then((contact)=>{
        res.send(contact)
    })
    .catch((err)=>{
        res.send(err)
    })


}

module.exports.list=function(req,res){
    const q=parseInt(req.query.pageNumber)
    Contact.find({user:req.user._id}).skip(q).limit(q)
    .then((contacts)=>{
        res.send(contacts)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports.show=function(req, res){
    const id=req.params.id
    Contact.findOne({_id:id, user:req.user._id})
    .then((contact)=>{
        res.send(contact)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports.update=function(req, res){
    const id=req.params.id
    const body=req.body
    Contact.findOneAndUpdate({_id:id, user:req.user._id},{$set:body}, {runValidators:true, new:true})
    .then((contact)=>{
       if(contact){
        res.send(contact)
       }
       else{
           res.send({})
       }
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports.delete=function(req, res){
    const id=req.params.id
    Contact.findOneAndDelete({_id:id, user:req.user._id})
    .then((contact)=>{
        if(contact){
            res.send(contact)
        }
        else{
            res.send('already deleted')
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}
