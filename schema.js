const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    cat: {
        type: String,
        required: false
    }

}, { timestamps: true });

module.exports = mongoose.model("User", schema);