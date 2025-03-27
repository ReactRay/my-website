import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export function sendEmail(FromEmail, messege, name) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email_user,
      pass: process.env.Email_password,
    },
  })

  const mailOptions = {
    from: process.env.Email_user,
    to: process.env.Email_user,
    subject: `you have received an email from ${FromEmail} by ${name}`,
    text: `${messege}`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Erro', error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
