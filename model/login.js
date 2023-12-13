const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userLoginSchema = new Schema({

  email:String,
  password:String,
  role:String
});
const userLogin=mongoose.model("userLogin",userLoginSchema)
module.exports=userLogin;