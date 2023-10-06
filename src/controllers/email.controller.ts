import { Request, Response } from "express";
import * as services from '../services/email.service'
import { RequestEmail } from "../interfaces/email.interfaces";
import { config } from '../config';
async function sendEmail(req: Request, res: Response) {

    const data : RequestEmail = req.body

    try {
     const {response} = await services.emailSend({
        from: ` ${data.titleFrom} <${data.userFrom}>`, // sender address
        to: data.userTo, // list of receivers
        subject: data.subject, // Subject line
        text: data.text || '', // plain text body
        html: data.html, // html body  
      })
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json()
    }
  }
  
  export default {
    sendEmail,
  };