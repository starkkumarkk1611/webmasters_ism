const { sendMail } = require('./utils/mailer')
sendMail({ to_email: "kundankushwaha.er@gmail.com", subject_email: "Verify Your Email", text_email: "kuch bhi", html_email: "<h2>Hello</h2>" }).then(() => {
    console.log("ho gya");
}).catch(err => console.log(err));