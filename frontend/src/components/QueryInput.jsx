import { useState } from "react";
import ResultCard from "./ResultCard";

function QueryInput() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const analyzeQuery = async () => {
        if (!query.trim()) {
            alert("Please enter an SQL query.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();
            setResult(data);

        } catch (error) {
            console.error(error);
            alert("Failed to connect to the backend.");
        }

        setLoading(false);
    };

    return (
        <div>

            <textarea
                rows="8"
                cols="80"
                placeholder="Enter your SQL query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <br /><br />

            <button onClick={analyzeQuery}>
                {loading ? "Analyzing..." : "Analyze"}
            </button>

            <ResultCard result={result} />

        </div>
    );
}

export default QueryInput;