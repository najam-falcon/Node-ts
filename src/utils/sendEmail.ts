/**
 * Send email service for forgot password
 * @author Najam Ul Saqib
 */
import nodemailer, { SendMailOptions, SentMessageInfo } from "nodemailer";
const sender_name = process.env.MAILER_DOMAIN;
const sender_email = process.env.MAILER_EMAIL;
const sender_password = process.env.MAILER_PASSWORD;

/**
 * sendEmail
 * @param {string} email
 * @param {string} password
 * @return {void}
 */

type SendEmailType = (email: string, password: string) => void;
type callbackType = (error: Error | null, info: any) => void;

export const sendEmail: SendEmailType = (email, password) => {
  return new Promise((resolve, reject) => {
    // Sender mail server config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: sender_email,
        pass: sender_password,
      },
    });

    // Send email options
    const mailOptions: SendMailOptions = {
      from: `${sender_name} <${sender_email}>`,
      to: email,
      subject: "Your password has been changed",
      text: password,
    };

    const callback: callbackType = (error, info) => {
      if (error) {
        // Error
        reject(error);
      } else {
        // Success
        resolve({ success: true, message: "Email sent successfully" });
      }
    };

    // Sending email
    transporter.sendMail(mailOptions, callback);
  });
};
