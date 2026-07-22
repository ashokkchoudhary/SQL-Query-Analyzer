import { useEffect, useState } from "react";
import HistoryTable from "../components/HistoryTable";

function History() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await fetch("http://localhost:5000/history");
            const data = await response.json();

            if (data.success) {
                setHistory(data.history);
            }
        } catch (error) {
            console.error(error);
            alert("Unable to fetch history.");
        }

        setLoading(false);
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Analysis History</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <HistoryTable history={history} />
            )}
        </div>
    );
}

export default History;