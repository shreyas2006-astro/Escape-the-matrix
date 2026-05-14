const express = require("express");
const router = express.Router();

const validateScore = require("../middleware/validateScore");

const {
    getScores,
    addScore,
    updateScore,
    deleteScore
} = require("../controllers/scoreController");

// GET
router.get("/", getScores);

// POST
router.post("/", validateScore, addScore);

// PUT
router.put("/:id", validateScore, updateScore);

// DELETE
router.delete("/:id", deleteScore);

module.exports = router;