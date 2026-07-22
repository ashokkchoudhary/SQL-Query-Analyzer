function orderByRule(ast) {
    const query = Array.isArray(ast) ? ast[0] : ast;

    if (!query) {
        return null;
    }

    // Apply only to SELECT statements
    if (query.type !== "select") {
        return null;
    }

    // Check if ORDER BY exists but LIMIT does not
    if (query.orderby && !query.limit) {
        return {
            rule: "ORDER_BY_WITHOUT_LIMIT",
            severity: "Low",
            message: "Query uses ORDER BY without LIMIT.",
            recommendation: "Consider using LIMIT if you only need the top results."
        };
    }

    return null;
}

module.exports = orderByRule;