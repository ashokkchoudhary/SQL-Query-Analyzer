const Analysis = require("../models/Analysis");

// Get all analyses
const getAllHistory = async (req, res) => {
    try {
        const history = await Analysis.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: history.length,
            history
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get one analysis
const getHistoryById = async (req, res) => {
    try {
        const analysis = await Analysis.findById(req.params.id);

        if (!analysis) {
            return res.status(404).json({
                success: false,
                message: "Analysis not found."
            });
        }

        res.status(200).json({
            success: true,
            analysis
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Delete an analysis
const deleteHistory = async (req, res) => {
    try {
        const analysis = await Analysis.findByIdAndDelete(req.params.id);

        if (!analysis) {
            return res.status(404).json({
                success: false,
                message: "Analysis not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Analysis deleted successfully."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    getAllHistory,
    getHistoryById,
    deleteHistory
};