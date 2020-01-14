const multer=require('multer')
const multerConfig={
 
    storage : multer.diskStorage({
        destination: function (req, file, next) {
         next(null, '/public/images')
         console.log('oye')

        },
        filename: function (req, file,next) {
            console.log(file)
            next()
         //next(null, file.fieldname + '-' + Date.now())
        }
      })
}
module.exports={multerConfig}      
//     //   var upload = multer({ storage: storage })

// next()    
// //     storage:multer.diskStorage({
// //         destination:function(req, file, next){
// //             next(null, './images')
// //         },
// //         filename:function(req, file,next){
// //             console.log(file)
// //         }
// //     })
// //    // next()
// }

// // var storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //       cb(null, '/tmp/my-uploads')
// //     },
// //     filename: function (req, file, cb) {
// //       cb(null, file.fieldname + '-' + Date.now())
// //     }
// //   })
   
// //   var upload = multer({ storage: storage })

// 

// const express=require('express')
// const router=express.Router()
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
//   var upload = multer({ storage: storage })
//   router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
//     const file = req.file
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(file)
    
//   })
