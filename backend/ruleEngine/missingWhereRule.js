function missingWhereRule(ast) {
    const query = Array.isArray(ast) ? ast[0] : ast;

    if (!query) {
        return null;
    }

    // Apply only to SELECT statements
    if (query.type !== "select") {
        return null;
    }

    // If WHERE clause is missing
    if (!query.where) {
        return {
            rule: "MISSING_WHERE",
            severity: "Medium",
            message: "Query does not contain a WHERE clause.",
            recommendation: "Use a WHERE clause to filter rows whenever appropriate."
        };
    }

    return null;
}

module.exports = missingWhereRule;