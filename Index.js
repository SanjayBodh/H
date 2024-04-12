const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});

app.post('/', (req, res) => {
    

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mohitboy112@gmail.com',
            pass: 'ffytoooeounpdvjk'
        }
    });

    const mailOptions = {
        from: 'mohitboy112@gmail.com', // Sender address
        to: req.body.email, // Receiver's email obtained from the form
        subject: `Thank you  ${req.body.name}\n Email ${req.body.email}`,
        text: `Name: ${req.body.name}\n\nEmail: ${req.body.email}\n\nAdhar No: ${req.body.subject}\n\nPancard No: ${req.body.message}\n\nAmount: ${req.body.amount}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
