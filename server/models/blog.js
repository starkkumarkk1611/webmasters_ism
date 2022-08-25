const mongoose = require("mongoose");
const date = require('date-and-time');
const now = new Date();


const BlogSchema = new mongoose.Schema({
    blog_title: {
        required: true,
        type: String,
        maxlength: 100
    },
    blog_tags: {
        type: String
    },
    intro: {
        type: String,
        required: true
    },
    subheading_1: {
        type: String
    },
    description_1: {
        type: String,
        required: true
    },
    subheading_2: {
        type: String
    },
    description_2: {
        type: String,
        // required: true
    },
    author: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Farmer'
        type: String
    },
    posting_time: {
        type: String,
        default: date.format(now, 'HH:mm:ss  YYYY/MM/DD')
    },
    conclusion: {
        type: String,
        required: true
    }
    //author
    //date and time
})

module.exports = mongoose.model("Blog", BlogSchema);