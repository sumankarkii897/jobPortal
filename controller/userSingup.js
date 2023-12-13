const user = require("../model/user");
const signupSchema = require("../model/userSignup");
const bcrypt = require("bcrypt");
const userSingup = async (req, res, next) => {
  console.log("Signing up...");
  let hashPassword = await bcrypt.hash(req.body.password, 10);
  let hashPassword2 = await bcrypt.hash(req.body.confirmPassword, 10);
  try {
    let oldUser=await user.findOne({email:req.body.email})
    if(oldUser){
        return res.status(401).send({"msg":"Email already exits"})
    }
    const value = await signupSchema.validateAsync(req.body);
    const userDetails = await user.create({
      ...value,
      password: hashPassword,
      confirmPassword: hashPassword2,
    });
    let userObj=userDetails.toObject();
    delete userObj.password;
    delete userObj.confirmPassword;
    res.send(userObj);
    console.log(userObj);
    next();
  } catch (error) {
    console.log(error.message);
    let err = error.details.map((el) => {
      return {
        message: el.message,
        params: el.context.key,
      };
    });
    res.status(401).send(err);
  }
};
module.exports = userSingup;
