const express=require("express");
const {postJob,getJob} = require("../controller/jobPost");
const router=express.Router();
router.post("/jobPortal/placeJob",postJob)
router.get("/jobPortal/getJob",getJob)
module.exports=router;