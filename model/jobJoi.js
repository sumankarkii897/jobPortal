const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const jobSchema = Joi.object({
  position: Joi.string()
        .required(),
  salary:Joi.number()
  .required()
});

module.exports = jobSchema;