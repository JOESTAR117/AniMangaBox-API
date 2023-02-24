import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "df08d1214e4e37",
    pass: "7d28879c36b02c",
  },
});
