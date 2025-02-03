const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        unique: true,
        default: null,
        required: true,
    },
    createdJobs: {
        type: [Schema.Types.ObjectId],
        ref: "Job",
        required: false,
    },
    appliedJobs: {
        type: [Schema.Types.ObjectId],
        ref: "Application",
        required: false,
    },
    savedJobs: {
        type: [Schema.Types.ObjectId],
        ref: "Job",
        required: false,
    }
})

module.exports = mongoose.model("User", userSchema);