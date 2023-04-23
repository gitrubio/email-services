import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { responseObject } from "./constants";

export function validateSchema(schema: Joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
       const {message, status}  = responseObject.BAD
      return res.status(status).send(`${message} [invalid data]`);
    } else {
        next()
    }
  };
}
