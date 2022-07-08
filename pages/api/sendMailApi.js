require('dotenv').config()
const nodemailer = require('nodemailer')
import Mail from '../../modules/components/Mail'

export default async (req, res) => {
  try {
    const { email, name, phone, messageAbout, drop } = req.body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailData = {
      from: process.env.SMTP_LOGIN,
      to: email,
      subject: `Обратная связь от сервиса floriarty`,
      text: '',
      html: `${Mail(name)}`
    }

    const toMeMailData = {
      from: process.env.SMTP_LOGIN,
      to: process.env.SMTP_LOGIN,
      subject: `Обратная связь от сервиса floriarty`,
      text: '',
      html: `<div>Имя: ${name}<br/>Телефон: ${phone}<br/>Email: ${email}<br/>Пожелания: ${messageAbout}<br/>Выбранный стиль: ${drop}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    })
    transporter.sendMail(toMeMailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    })

    res.status(200).json({ name, phone, email, messageAbout })

  }
  catch (e) {
    res.json(e)
  }
}
