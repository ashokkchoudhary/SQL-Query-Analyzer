const Analysis = require("../models/Analysis");
const parseSQL = require("../parser/sqlParser");
const analyzeQuery = require("../ruleEngine/ruleEngine");
const generateRecommendations = require("../utils/recommendationGenerator");
const calculateScore = require("../utils/scoreCalculator");

const analyzeSQL = async (req, res) => {
    try {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({
                success: false,
                message: "SQL query is required."
            });
        }

        // Parse SQL
        const parsedResult = parseSQL(query);

        if (!parsedResult.success) {
            return res.status(400).json({
                success: false,
                message: parsedResult.error
            });
        }

        const ast = parsedResult.ast;

        // Analyze query
        const issues = analyzeQuery(ast);

        // Generate recommendations
        const recommendations = generateRecommendations(issues);

        // Calculate optimization score
        const score = calculateScore(issues);

        // Save analysis
        const analysis = new Analysis({
            query,
            issues,
            recommendations,
            score
        });

        await analysis.save();

        // Send response
        res.status(200).json({
            success: true,
            query,
            issues,
            recommendations,
            score
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
    analyzeSQL
};