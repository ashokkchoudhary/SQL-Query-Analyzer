const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({

    query: {
        type: String,
        required: true
    },

    issues: [
        {
            rule: String,
            severity: String,
            message: String,
            recommendation: String
        }
    ],

    recommendations: [
        {
            rule: String,
            recommendation: String
        }
    ],

    score: {
        type: Number,
        default: 100
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Analysis", analysisSchema);