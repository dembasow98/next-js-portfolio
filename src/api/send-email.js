import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { from_name, from_email, subject, message } = req.body;

    const email = {
      from: from_email,
      to: process.env.NEXT_SITE_MAIL_RECIEVER,
      subject: subject,
      text: `Name: ${from_name}\nEmail: ${from_email}\n\nMessage:\n${message}`,
    };

    try {
      await resend.send(email);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}