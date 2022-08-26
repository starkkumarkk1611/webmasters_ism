const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.mongodb_url || "mongodb + srv://mejarkumar:GYi4eXgmcgsChNxZ@cluster0.jkvct40.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;