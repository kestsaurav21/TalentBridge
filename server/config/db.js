const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("MongoDB is connected!");
    } catch (error) {
        console.log("MongoDB Connection Failed!", error);
    }
}

module.exports = connectDB;