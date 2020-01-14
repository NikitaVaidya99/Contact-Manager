const multer= require('multer')
const express=require('express')
const configDb=require('./config/database')
const cors=require('cors')



const app=express()
const router=require('./config/routes')
const port=3001

app.use(express.json())

configDb()

app.use(cors())





app.get('/', (req, res)=>{
    res.send('welcome')
})

app.use('/', router)

app.listen(port, ()=>{
    console.log('listening on port ', port)
})