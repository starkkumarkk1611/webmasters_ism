const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Joi = require("joi");
const winston = require("winston");
const auth = require('../middleware/auth');

router.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 });
        // console.log(req.user);
        res.send(blogs);
        // res.send(filteredblogs);
    } catch (error) {
        res.status(500).send("Error: " + error.message);

        winston.error(error.message);
    }
});

router.post("/writeblog", auth, async (req, res) => {
    const schema = Joi.object({
        blog_title: Joi.string().min(3).max(200).required(),
        author: Joi.string().min(3),
        blog_tags: Joi.string().min(3).max(100).required(),
        intro: Joi.string().min(3).max(300).required(),
        subheading_1: Joi.string().min(3).max(200).required(),
        description_1: Joi.string().min(3).max(600).required(),
        subheading_2: Joi.string().min(3).max(200).required(),
        description_2: Joi.string().min(3).max(600).required(),
        posting_time: Joi.date(),
        conclusion: Joi.string().min(3).max(500).required()
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const { conclusion, blog_title, description_2, subheading_2, description_1, subheading_1, intro, blog_tags } = req.body;
    const author = req.user.username;
    let blog = new Blog({ conclusion, author, blog_title, description_2, subheading_2, description_1, subheading_1, intro, blog_tags });

    blog = await blog.save();
    res.send(blog);
});

router.put("blog/:id", auth, async (req, res) => {
    const schema = Joi.object({
        blog_title: Joi.string().min(3).max(200).required(),
        blog_tags: Joi.string().min(3).max(100).required(),
        intro: Joi.string().min(3).max(300).required(),
        subheading_1: Joi.string().min(3).max(200).required(),
        description_1: Joi.string().min(3).max(600).required(),
        subheading_2: Joi.string().min(3).max(200).required(),
        description_2: Joi.string().min(3).max(600).required(),
        posting_time: Joi.date(),
        conclusion: Joi.string().min(3).max(500).required(),
        // author: Joi.string().min(3),

    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(result.error.details[0].message);

    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).send("blog not found...");

    if (blog.auther !== req.user._id)
        return res.status(401).send("blog update failed. Not authorized...");

    const { blog_title, posting_time, description_2, subheading_2, description_1, subheading_1, intro, blog_tags, conclusion } = req.body;

    const updatedblog = await blog.findByIdAndUpdate(
        req.params.id,
        { blog_title, posting_time, description_2, subheading_2, description_1, subheading_1, intro, blog_tags, conclusion },
        { new: true }
    );

    res.send(updatedblog);
});

// router.delete("/:id", auth, async (req, res) => {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) return res.status(404).send("blog not found...");

//     if (blog.auther !== req.user._id)
//         return res.status(401).send("blog deletion failed. Not authorized...");

//     const deletedblog = await Blog.findByIdAndDelete(req.params.id);

//     res.send(deletedblog);
// });

router.get("blog/:id", auth, async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).send("blog not found...");


    res.send(blog);
});



module.exports = router;