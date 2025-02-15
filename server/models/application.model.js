const mongoose = require("mongoose");
const jobApplicationSchema = new mongoose.Schema({
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    // enum stats for status
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        required: true,
        default: "pending",
    }
})
module.exports = mongoose.model("Application", jobApplicationSchema);