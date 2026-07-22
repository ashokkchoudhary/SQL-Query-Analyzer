function distinctRule(ast) {
    const query = Array.isArray(ast) ? ast[0] : ast;

    if (!query) {
        return null;
    }

    // Apply only to SELECT statements
    if (query.type !== "select") {
        return null;
    }

    // Check if DISTINCT is used
    if (query.distinct) {
        return {
            rule: "DISTINCT_USAGE",
            severity: "Low",
            message: "DISTINCT is used in the query.",
            recommendation: "Use DISTINCT only when removing duplicate rows is necessary, as it can impact performance."
        };
    }

    return null;
}

module.exports = distinctRule;