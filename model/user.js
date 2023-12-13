const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  username:String,
  email:String,
  password:String,
  confirmPassword:String
});
const user=mongoose.model("User",UserSchema)
module.exports=user;