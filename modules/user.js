const mongoose=require('mongoose')

const{ Schema } = mongoose;

const userSchema=new Schema({
    name:'string',
    email:'string',
    age:Number

})

module.exports=mongoose.model('user', userSchema);