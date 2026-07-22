const express = require("express");

const router = express.Router();

const { analyzeSQL } = require("../controllers/analysisController");

router.post("/analyze", analyzeSQL);

module.exports = router;