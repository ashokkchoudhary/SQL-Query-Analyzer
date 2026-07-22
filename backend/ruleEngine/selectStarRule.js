function selectStarRule(ast) {
    const query = Array.isArray(ast) ? ast[0] : ast;

    if (!query || query.type !== "select") {
        return null;
    }

    const columns = query.columns;

    if (
        columns.length === 1 &&
        columns[0].expr &&
        columns[0].expr.type === "column_ref" &&
        columns[0].expr.column === "*"
    ) {
        return {
            rule: "SELECT_STAR",
            severity: "Medium",
            message: "Avoid using SELECT *.",
            recommendation: "Specify only the required columns."
        };
    }

    return null;
}

module.exports = selectStarRule;