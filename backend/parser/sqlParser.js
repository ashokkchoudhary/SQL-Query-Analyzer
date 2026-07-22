const { Parser } = require("node-sql-parser");

const parser = new Parser();

function parseSQL(sql) {
    try {
        const ast = parser.astify(sql);

        return {
            success: true,
            ast: ast
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

module.exports = parseSQL;