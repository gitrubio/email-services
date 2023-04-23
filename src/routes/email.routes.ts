import express from 'express';
import controller from '../controllers/email.controller'
import { validateSchema } from '../utils/functions';
import { emailSchema } from '../schemas/email.schema';
const route = express.Router();

route.post('/email',validateSchema(emailSchema),controller.sendEmail)


export default route;