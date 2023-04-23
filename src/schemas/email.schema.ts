import Joi from "joi";

export const emailSchema = Joi.object({    
    titleFrom : Joi.string().optional(),
    userTo: Joi.string().required().email(),
    subject: Joi.string(),
    text: Joi.string().optional(),
    html: Joi.string(),
});