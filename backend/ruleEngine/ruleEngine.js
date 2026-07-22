const selectStarRule = require("./selectStarRule");
const missingWhereRule = require("./missingWhereRule");
const distinctRule = require("./distinctRule");
const likeRule = require("./likeRule");
const orderByRule = require("./orderByRule");

function analyzeQuery(ast) {
    const issues = [];

    const rules = [
        selectStarRule,
        missingWhereRule,
        distinctRule,
        likeRule,
        orderByRule
    ];

    for (const rule of rules) {
        const result = rule(ast);

        if (result) {
            issues.push(result);
        }
    }

    return issues;
}

module.exports = analyzeQuery;