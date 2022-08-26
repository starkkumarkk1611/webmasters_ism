"use strict";
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async ({ to_email, subject_email, text_email, html_email }) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "20je0504@me.iitism.ac.in",
            pass: "znbwgrquagnlobam"
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.NODEMAILER_GMAIL, // sender address
        to: to_email, // list of receivers
        subject: subject_email, // Subject line
        text: text_email, // plain text body
        html: html_email, // html body
    });

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports.sendMail = sendMail;