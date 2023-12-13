const user = require("../model/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const loginSchema = require("../model/userLogin");
const userLogin = require("../model/login");
const login = async (req, res, next) => {
  try {
    const value = await loginSchema.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    const Userlogin=userLogin.create({...value,password:hashPassword})
    let oldUser = await user
      .findOne({ email: req.body.email })
      .select({ "+password": 1 });
    if (oldUser) {
      console.log("login...");
      let rehashedPassword = await bcrypt.compare(
        req.body.password,
        oldUser.password
      );
      oldUser = oldUser.toObject();
      delete oldUser.password;
      delete oldUser.confirmPassword;

      if (rehashedPassword) {
        let token = jwt.sign(oldUser, "shhhhh");

        return res.send({
          oldUser,
          token,
        });
      }
    }
    return res.status(401).send({ msg: "Invalid Password" });
  } catch (error) {
    res.send(error.message);
    console.log(error.message);
  }
};
module.exports = login;
