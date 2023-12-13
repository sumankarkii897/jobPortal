const jobSchema = require("../model/jobJoi");
const job=require("../model/jobModel")
const postJob=async (req,res,next)=>{
    try {
        const value = await jobSchema.validateAsync(req.body, {
            abortEarly: false,
            stripUnknown: true,
          });
          const jobPlaced=await job.create(value);
          res.send(jobPlaced)
          console.log(`job placed in database`);
          console.log(jobPlaced);
    } catch (error) {
        res.send(error.message)
        console.log(error.message);
    }
}
const getJob=async (req,res,next)=>{
    try {
        const getJob=await job.find();
        res.send(getJob)
        console.log(getJob);
    } catch (error) {
     res.status(501).send(error.message)   
     console.log(error.message);
    }
}
module.exports={postJob,getJob}