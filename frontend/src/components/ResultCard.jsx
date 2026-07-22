function ResultCard({ result }) {
    if (!result) return null;

    const getScoreColor = (score) => {
        if (score >= 80) return "green";
        if (score >= 60) return "orange";
        return "red";
    };

    return (
        <div className="result-container">

            <div className="score-card">
                <h2>Optimization Score</h2>

                <h1
                    style={{
                        color: getScoreColor(result.score)
                    }}
                >
                    {result.score}/100
                </h1>
            </div>

            <h2>Detected Issues</h2>

            {result.issues.length === 0 ? (
                <div className="issue-card">
                    <h3>No Issues Found 🎉</h3>
                    <p>Your SQL query looks optimized.</p>
                </div>
            ) : (
                result.issues.map((issue, index) => (
                    <div className="issue-card" key={index}>

                        <div className="issue-header">

                            <h3>{issue.rule}</h3>

                            <span
                                className={`severity ${issue.severity.toLowerCase()}`}
                            >
                                {issue.severity}
                            </span>

                        </div>

                        <p>
                            <strong>Message:</strong>
                            {" "}
                            {issue.message}
                        </p>

                        <p>
                            <strong>Recommendation:</strong>
                            {" "}
                            {issue.recommendation}
                        </p>

                    </div>
                ))
            )}

        </div>
    );
}

export default ResultCard;