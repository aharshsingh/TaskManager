const Joi = require('joi');

const taskValidationSchema = Joi.object({
    taskName: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date().iso().required(), 
    priority: Joi.string().required()
});

const reminderValidationSchema = Joi.object({
    taskId: Joi.string().required(),
    reminderDateTime: Joi.date().required(),
    message: Joi.string(),
    email: Joi.string().email().required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,16}$')).required()
});

module.exports = { taskValidationSchema, reminderValidationSchema, loginSchema };
