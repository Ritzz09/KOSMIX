const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

// Hardcoded Email Credentials
const EMAIL_USER = 'hchaudhari754@gmail.com';
const EMAIL_PASS = 'yrscfwvjduhuhauc';

// Create Express App
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Verify Email Credentials
console.log('Email User:', EMAIL_USER);
console.log('Email Pass:', EMAIL_PASS ? 'Loaded' : 'Not Loaded');

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use 587 for TLS
    secure: true, // true for SSL, false for TLS
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Verify SMTP Connection (Runs Once When Server Starts)
transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP connection error:', error);
    } else {
        console.log('SMTP server is ready to take messages');
    }
});

// Email Sending Route
app.post('/api/sendmail', (req, res) => {
    const { name, email, service, department, message } = req.body;

    console.log('Received Form Data:', req.body);

    // Email Content
    const mailOptions = {
        from: EMAIL_USER,
        to: 'seexpert111@gmail.com', // Receiver's email
        subject: 'New Appointment Request',
        html: `
            <h2>New Appointment Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start Server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
