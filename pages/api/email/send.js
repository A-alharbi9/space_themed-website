require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function send(req, res) {
    switch (req.method) {
        case 'POST': {
            const { userEmail, userMessage } = req.body;

            if (!userEmail || !userMessage) {
                res.status(400);
            }

            const transport = nodemailer.createTransport({
                host: `${process.env.SMTP_HOST}`,
                port: `${process.env.SMTP_PORT}`,
                secure: false,
                auth: {
                    user: `${process.env.SMTP_AUTH_USER}`,
                    pass: `${process.env.SMTP_AUTH_PASSWORD}`,
                },
            });

            const data = {
                from: `You <${process.env.SMTP_MAIL_USER}>`,
                to: `You <${process.env.SMTP_MAIL_USER}>`,
                subject: 'Contact us page message',
                text: `You have a new message from contact us form: From: ${userEmail} Message: ${userMessage}`,
                html: ` You have a new message from contact us form: <br></br><br></br><b>From:</b> ${userEmail}<br></br><br></br><b>Message:</b> ${userMessage}`,
            };

            const sendMessage = await transport.sendMail(data);

            if (!sendMessage) {
                res.status(500);
            }

            res.status(200).json({ msg: 'Your message has been sent successfully!' });

            break;
        }

        default:
            res.send(405).end();
            break;
    }
}

export default send;
