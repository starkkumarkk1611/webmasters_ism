require('dotenv').config()
const express = require("express");
const app = express();
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const authrouter = require('./routes/farmer');
const searchRouter = require('./routes/search');
const client = require('./routes/client');
const { join } = require("path");
const cors = require("cors");


connectDB();
app.use(cors());
app.use(express.static("public"));
const publicFolder = join(__dirname, 'client', 'build');
app.use('/', express.static(publicFolder));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", authrouter);
app.use("/search", searchRouter);




// if (process.env.NODE_ENV === "production") {
//     // app.use(express.static("client/build"));
//     app.use(client);
// }


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`server is running on port ${port}`);
})
