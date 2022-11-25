const mongoose=require('mongoose')

const connectDB=()=>{
    mongoose.connect(process.env.mongodbpath).then(()=>console.log("db is connected")).catch((err)=>console.log(err))
}

module.exports=connectDB