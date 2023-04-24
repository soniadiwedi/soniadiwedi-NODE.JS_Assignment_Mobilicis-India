const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    income:String,
    city:String,
    car:String,
    quote:String,
    phone_price:String
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}