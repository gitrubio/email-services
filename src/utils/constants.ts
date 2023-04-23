import * as nodemailer from "nodemailer";
import { config } from '../config';
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: config.emails.user,
    pass: config.emails.pass,
  },
});
transporter.verify().then(() => {
  console.log('Ready for send emails ⚡⚡');
});


export const responseObject = {
    OK : {
        status : 200,
        message : 'operation success'
    },
    BAD : {
        status : 400,
        message : 'operation faild'
    },
    unauthorized :{
        status : 403,
        message : 'operation unauthorized'
    },
}