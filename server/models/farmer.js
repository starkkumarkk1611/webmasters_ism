const mongoose = require('mongoose');


const FarmerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true,
    },
    couponId: {
        type: String,
        required: true
    },
    collegeName: { type: String },
    college_id: { type: String },
    phoneNum: { type: String },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 }
})

module.exports = mongoose.model("Farmer", FarmerSchema);