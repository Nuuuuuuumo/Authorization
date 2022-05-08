const nodemailer = require('nodemailer')
require('dotenv').config()

class MailService {
    constructor() {
        try {
            this.transport = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            })

        } catch (e) {
            console.log(e)
        }

    }

    async sendActivationMail(email, link) {
        try {
            await this.transport.sendMail({
                from: process.env.SMTP_USER,
                to: email,
                subject: 'Активация аккаунта на ' + process.env.API_URL,
                text: '',
                html:
                    `
                <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href="${link}">${link}</a>
                </div>
                `
            })
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new MailService()