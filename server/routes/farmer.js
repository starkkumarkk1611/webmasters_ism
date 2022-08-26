const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generate = require('meaningful-string');
const Farmer = require("../models/farmer");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Coupons = require('../models/coupon');
const farmer = require("../models/farmer");
const { sendMail } = require('../utils/mailer')
const qrcode = require('qrcode-generator')

router.get("/signup", (req, res) => {
    res.status(200).json(req.body)
})

router.get("/hello", (req, res) => {

    res.json("hello");
})

router.post("/get_discount", auth, async (req, res) => {
    console.log(req.body.givencoupon);

    const existCoupon = await Coupons.findOne({ couponId: req.body.givencoupon });

    if (!existCoupon) {
        return res.status(400).send("fail");
    }

    // sendMail({
    //     to_email: req.user.email, subject_email: "You Have sucessfully purchased a new Course.", text_email: `<h2>You Have sucessfully purchased a new Course using referral code of ${couponId} . </h2>`,
    //     html_email: `
    //     <div>
    //         <h2>You Have Sucessfully Registered.
    //             Your referral code is ${couponId} 
    //         </h2>
    //         <h3>Your referral QR code is:</h3>
    //         <img src=${qr.createDataURL()}  />
    //      <div>` }).then(() => {
    //         console.log("mail sent for purchasing");
    //     }).catch(err => console.log(err));

    return res.send("sucess");
    // res.json("get discount of 50%");
})

router.get('/getcouponId', auth, async (req, res) => {
    // let useremail = await Farmer.findOne({ email: req.user.email });
    let useremail = await Farmer.findOne({ email: req.user.email });
    // console.log(useremail);
    res.json(useremail.couponId);

})


router.post("/signup", async (req, res) => {
    // const schema = Joi.object({
    //     username: Joi.string().min(3).max(30).required(),
    //     email: Joi.string().min(3).max(200).required().email(),
    //     password: Joi.string().min(6).max(200).required(),
    // });

    // const { error } = schema.validate(req.body);

    // if (error) return res.status(400).send(error.details[0].message);


    let useremail = await Farmer.findOne({ email: req.body.email });

    if (useremail) return res.status(400).send("User already exists...");

    let users = await Farmer.find({});
    // const totalProps = users.reduce((a, obj) => a + Object.keys(obj).length, 0);
    // console.log(totalProps);
    // console.log(users.length)

    var maxi = -1;

    var clientemail = "";
    var clientusername = "";
    var clientpassword = "";
    var clientPhoneNum = "";
    var clientCollegeId = "";
    var clientCollegeName = "";

    for (let i = 0; i < users.length; i++) {
        var cnt = 0;
        if (req.body.username === users[i].username) cnt++;
        if (req.body.password === users[i].password) cnt++;
        if (req.body.college_id === users[i].college_id) cnt++;
        if (req.body.collegeName === users[i].collegeName) cnt++;
        if (req.body.phoneNum === users[i].phoneNum) cnt++;
        console.log(cnt);
        if (maxi <= (cnt) && cnt >= 4) {
            maxi = cnt;
            clientemail = users[i].email;
            clientpassword = users[i].password;
            clientusername = users[i].username;
            clientCollegeId = users[i].college_id;
            clientCollegeName = users[i].collegeName;
            clientPhoneNum = users[i].phoneNum;
        }
    }


    if (maxi != -1) {
        // console.log(clientemail);
        sendMail({
            to_email: req.body.email, subject_email: "Something went wrong !", text_email: `<h2>Dear user, we have found that you might be our existing user. If so please try to login, please avoid this mail .</h2>`, html_email: `<h2>Dear user, we have found that you might be our existing user. If so please try to login, please avoid this mail.`
        }).then(() => {
            console.log("mail sent");
        }).catch(err => console.log(err));
        res.send("Your profile is matching with someone " + clientemail);
    } else {
        var options = {
            "min": 10,
            "max": 15,
            "capsWithNumbers": true
        }




        const { username, email, password, phoneNum, collegeName, college_id } = req.body;
        var couponId = generate.random(options);
        var farmer = new Farmer({ username, email, password, phoneNum, collegeName, college_id, couponId });

        var coupon = new Coupons({ couponId });
        const salt = await bcrypt.genSalt(10);
        farmer.password = await bcrypt.hash(farmer.password, salt);

        await farmer.save();
        await coupon.save();

        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ _id: farmer._id, username: farmer.username, email: farmer.email, couponId: farmer.couponId }, jwtSecretKey)
        var qr = qrcode(4, 'L');
        qr.addData(couponId);
        qr.make()

        sendMail({
            to_email: farmer.email, subject_email: "You Have sucessfully Registered", text_email: `<h2>You Have Sucessfully Registered. Your referral code is ${couponId} </h2>`,
            html_email: `
        <div>
            <h2>You Have Sucessfully Registered.
                Your referral code is ${couponId} 
            </h2>
            <h3>Your referral QR code is:</h3>
            <img src=${qr.createDataURL()}  />
         <div>` }).then(() => {
                console.log("mail sent");
            }).catch(err => console.log(err));
        res.send(token);
    }
});




router.post("/login", async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(6).max(200).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let farmer = await Farmer.findOne({ email: req.body.email });
    if (!farmer) return res.status(400).send("Invalid email or password...");

    const validPassword = await bcrypt.compare(req.body.password, farmer.password);
    if (!validPassword)
        return res.status(400).send("Invalid email or password...");

    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ _id: farmer._id, username: farmer.username, email: farmer.email }, jwtSecretKey)
    sendMail({
        to_email: farmer.email, subject_email: "Welcome once again", text_email: `<h2>Welcome once again .</h2>`, html_email: `<h2>we are really happy to see you once again. your referral code is ${farmer.couponId} </h2>
        ` }).then(() => {
            console.log("mail sent");
        }).catch(err => console.log(err));
    res.send(token);
});




module.exports = router;