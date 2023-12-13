const express = require('express')
const userSingup = require('../controller/userSingup')
const login = require('../controller/userLogin')
const router=express.Router()

router.post('/jobPortal/userLogin', login)
router.post("/jobPortal/userSingup",userSingup)
  module.exports=router;