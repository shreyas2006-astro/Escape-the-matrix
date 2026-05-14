const express = require("express");
const cors = require("cors");

const scoreRoutes = require("./routes/scoreroutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/scores", scoreRoutes);

// Health route
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date(),
        environment: "development"
    });
});

// Root route
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        error: "Something went wrong on the server"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});