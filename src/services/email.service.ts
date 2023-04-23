import { Email } from "../interfaces/email.interfaces";
import { transporter } from "../utils/constants";

export const emailSend = async ( info : Email) => {
   const result = await transporter.sendMail({...info});
   return result
}