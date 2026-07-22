import QueryInput from "../components/QueryInput";

function Home() {
    return (
        <div
            style={{
                maxWidth: "1100px",
                margin: "30px auto",
                padding: "20px"
            }}
        >
            <h1>SQL Query Analyzer</h1>

            <p>
                Analyze SQL queries, detect optimization issues,
                and receive performance recommendations.
            </p>

            <QueryInput />
        </div>
    );
}

export default Home;