const express=require('express')
const multer=require('multer')
const usersController= require('../app/controllers/usersController')
const contactsController=require('../app/controllers/contactsController')
const router=express.Router()

// var upload = multer({ dest: 'uploads/' })
// const {multerConfig}=require('../app/middleware/multer')

const {authenticate}=require('../app/middleware/authentication')

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/account',authenticate, usersController.account)
router.delete('/logout', authenticate, usersController.logout)

// router.post('/try',multer(multerConfig).single('myFile'), contactsController.try)
router.post('/createcontact',authenticate, contactsController.create)
router.get('/contacts', authenticate, contactsController.list)
router.get('/contacts/:id', authenticate, contactsController.show)
router.put('/contacts/:id', authenticate, contactsController.update)
router.delete('/contacts/:id', authenticate, contactsController.delete)

module.exports=router