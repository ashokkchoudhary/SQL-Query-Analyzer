function likeRule(ast) {
    const query = Array.isArray(ast) ? ast[0] : ast;

    if (!query) {
        return null;
    }

    // Apply only to SELECT statements
    if (query.type !== "select") {
        return null;
    }

    const where = query.where;

    if (!where) {
        return null;
    }

    // Check for LIKE '%text'
    if (
        where.operator === "LIKE" &&
        where.right &&
        where.right.type === "single_quote_string"
    ) {
        const value = where.right.value;

        if (value.startsWith("%")) {
            return {
                rule: "LEADING_WILDCARD_LIKE",
                severity: "High",
                message: "LIKE pattern starts with '%'.",
                recommendation: "Avoid leading wildcards because they prevent index usage."
            };
        }
    }

    return null;
}

module.exports = likeRule;