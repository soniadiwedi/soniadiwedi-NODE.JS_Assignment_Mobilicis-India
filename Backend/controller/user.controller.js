const express = require("express")
const { UserModel } = require("../model/users.model")
const router = express.Router()


router.get("/bmw-mercedes",async(req,res)=>{
    
    try{
        let lower=await UserModel.find({income:{$lt:"$5"},car:{$in:['BMW','Mercedes-Benz']}})
        res.status(200).send(lower)
    }catch(err){
       res.status(500).send({"msg":err.message});
    }
})

router.get("/phone",async(req,res)=>{
    try{
        let greater=await UserModel.find({gender:"Male",phone_price:{$gt:"10000"}})
       
        res.status(200).send(greater)
    }catch(err){
        res.status(500).send({"msg":err.message})
    }
})
//Users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name.
router.get("/lastname",async(req,res)=>{
    try {
        const name = await UserModel.find({
          last_name: { $regex: /^M/ },
          quote: { $exists: true, $regex: /^.{15,}$/ },
          email: { $regex: new RegExp(req.query.last_name) }
        })
    
        res.status(200).json(name);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
      }
})

//Users which have a car of brand "BMW", "Marcedes" or "Audi" and whose email does not include any digit.
router.get("/emaildoesnotmatch",async(req,res)=>{
    try {
        const users = await UserModel.find({
          car: { $in: ["BMW", "Mercedes", "Audi"] },
          email: { $not: /\d/ }
        })
    
        res.status(200).json(users);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
      }
})

module.exports={router}