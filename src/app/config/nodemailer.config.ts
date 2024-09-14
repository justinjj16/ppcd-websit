import nodemailer from "nodemailer";

const fromEmail = process.env.FROM_EMAIL;
const password = process.env.EMAIL_PASS;
const toEmail = process.env.TO_EMAIL;

export const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: fromEmail,
    pass: password,
  },
});

export const mailOptions = {
  from: fromEmail,
  to: toEmail,
};
