import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { from_name, from_email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_SERVER_HOST,
      port: 587,
      auth: {
        user: process.env.NEXT_SMTP_SERVER_USERNAME,
        pass: process.env.NEXT_SMTP_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: from_email,
      to: process.env.NEXT_SITE_MAIL_RECIEVER,
      subject: subject,
      text: `Name: ${from_name}\nEmail: ${from_email}\n Subject: ${subject}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}