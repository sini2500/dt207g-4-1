const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Företagsnamn krävs"]
    },

    jobtitle: {
        type: String,
        required: [true, "Jobbtitel krävs"]
    },

    location: {
        type: String,
        required: [true, "Plats krävs"]
    },

    startdate: {
        type: Date,
        required: [true, "Startdatum krävs"]
    },

    enddate: {
        type: Date
    },

    description: {
        type: String,
        required: [true, "Beskrivning krävs"]
    }

}, { timestamps: true });

module.exports = mongoose.model("WorkExperience", schema);