const {User}=require('../models/user')

// const middleware={
//     authenticate: function(req, res, next){
//             const token=req.header('x-auth')
//             User.findByToken(token)
//             .then(function(user){
//                 //console.log('hey',user)
//                //res.send(user)
//                req.user=user
//                req.token=token
//                next()
//             })
//             .catch((err)=>{
//                 res.status('401').send(err)
//             })
//         },
//         multer: function(req, res, next){

//         }

// }
const authenticate= function(req, res, next){
    const token=req.header('x-auth')
    User.findByToken(token)
    .then(function(user){
        //console.log('hey',user)
       //res.send(user)
       req.user=user
       req.token=token
       next()
    })
    .catch((err)=>{
        res.status('401').send(err)
    })
}

module.exports={authenticate}

//module.exports={middleware}