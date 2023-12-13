const mongoose=require("mongoose")
const Schema=mongoose.Schema
const jobSchema=new Schema({
    position:String,
    salary:Number
})
const job=mongoose.model("Jobs",jobSchema)
module.exports=job;