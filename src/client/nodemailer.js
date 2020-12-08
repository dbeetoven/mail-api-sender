const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config({ silent: true })

const sendMail = (data, callback) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  })
  const mailOptions = {
    from:  `${process.env.FROM_NAME} <${process.env.SENDER_MAIL}>`,
    to: `${data.email}`,
    bcc: `${data.saler}`,
    subject: 'Ordem de compra',
    text:data.body,
    envelope: {
      from: `${process.env.SENDER_MAIL}`,
      to: `${data.email}`
  }
  }

  transporter.sendMail(mailOptions, callback)
}

module.exports = {
  sendMail
}
