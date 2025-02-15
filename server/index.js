const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/db");
dotenv.config();

const app = express();
const port = process.env.PORT || 7700;

connectDB();

app.use(errorHandler)
app.use('/', (error, req, res, next) => {
    try {
        res.send("hello world");
    } catch (error) {
        next(error);
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);


} )