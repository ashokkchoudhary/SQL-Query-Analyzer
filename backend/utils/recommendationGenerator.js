function generateRecommendations(issues) {
    return issues.map(issue => ({
        rule: issue.rule,
        recommendation: issue.recommendation
    }));
}

module.exports = generateRecommendations;