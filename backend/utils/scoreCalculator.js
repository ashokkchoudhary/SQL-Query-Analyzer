function calculateScore(issues) {
    let score = 100;

    issues.forEach(issue => {
        switch (issue.severity) {
            case "High":
                score -= 30;
                break;

            case "Medium":
                score -= 20;
                break;

            case "Low":
                score -= 10;
                break;
        }
    });

    // Score should never be below 0
    if (score < 0) {
        score = 0;
    }

    return score;
}

module.exports = calculateScore;