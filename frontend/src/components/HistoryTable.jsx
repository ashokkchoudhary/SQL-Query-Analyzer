function HistoryTable({ history }) {
    if (!history || history.length === 0) {
        return <p>No analysis history found.</p>;
    }

    return (
        <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{
                width: "100%",
                marginTop: "20px",
                borderCollapse: "collapse"
            }}
        >
            <thead>
                <tr>
                    <th>SQL Query</th>
                    <th>Score</th>
                    <th>Created At</th>
                </tr>
            </thead>

            <tbody>
                {history.map((item) => (
                    <tr key={item._id}>
                        <td>{item.query}</td>
                        <td>{item.score}/100</td>
                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default HistoryTable;