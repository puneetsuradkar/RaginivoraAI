import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    try {
        // Configure the transporter
        // NOTE: This uses generic environment variables that need to be configured.
        // For demo/development purposes, if env vars are missing, we still return success 
        // to simulate the front-end working, but log it to the console.

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log('--- NEW CONTACT SUBMISSION ---');
            console.log(`Name: ${name}`);
            console.log(`Phone: ${phone}`);
            console.log(`Email: ${email}`);
            console.log('------------------------------');
            console.warn('NOTE: SMTP_USER and SMTP_PASS environment variables are not set. Email was not actually sent.');
            return res.status(200).json({ message: 'Success (Simulated)' });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: `"RaginivoraAI Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // where you want to receive emails
            subject: `New Lead: ${name}`,
            text: `
        New Lead Submission from RaginivoraAI Website:
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
      `,
            html: `
        <h3>New Lead Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
}
