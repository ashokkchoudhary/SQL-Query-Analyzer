const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const analysisRoutes = require("./routes/analysisRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();

const PORT = 5000;

app.use(cors());
// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Home Route
app.get("/", (req, res) => {
    res.send("SQL Query Analyzer Backend is Running");
});

// Routes
app.use("/", analysisRoutes);
app.use("/", historyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});