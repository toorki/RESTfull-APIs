const express=require('express')
const connectDB = require('./config/connecDB')
const user = require('./modules/user')
require('dotenv').config()

const app=express()
app.use(express.json())

const PORT=4000

connectDB()

app.post('/users/adduser', async(req,res)=>{


    console.log(res.body)
    try{
        const newUser=new user(req.body)
        console.log(newUser)
        const newData= await newUser.save()
        res.json({message:"user added", user:newData})
    }
    catch(err){res.json({err:message.err})}
})

app.get('users/getuser', async(req,res)=>{
    const userlist=await user.find()
    res.json(userlist)
})

app.put('users/updateuser', async(req,res)=>{
    const update=await user.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
    res.json({message:"user updated", update:user})
})

app.delete('users/deleteuser', async(req,res)=>{
await user.findByIdAndDelete(req.params.id)
res.json({message:"user was deleted"})
})


app.listen(PORT,(err)=>err?console.log(err):console.log('app is runing on port${PORT}'))