const mongoose = require('mongoose');


const CouponSchema = new mongoose.Schema({

    couponId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Coupons", CouponSchema);