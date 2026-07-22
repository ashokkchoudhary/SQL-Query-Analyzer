import { useState } from "react";
import Home from "./pages/Home";
import History from "./pages/History";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">

      <header className="navbar">
        <h2>SQL Query Analyzer</h2>

        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("history")}>History</button>
        </div>
      </header>

      <main>
        {page === "home" ? <Home /> : <History />}
      </main>

    </div>
  );
}

export default App;