const express = require("express");

const router = express.Router();

const {
    getAllHistory,
    getHistoryById,
    deleteHistory
} = require("../controllers/historyController");

router.get("/history", getAllHistory);

router.get("/history/:id", getHistoryById);

router.delete("/history/:id", deleteHistory);

module.exports = router;