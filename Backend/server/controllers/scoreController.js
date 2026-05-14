let scores = [];

// GET scores
const getScores = (req, res) => {
    const topScores = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    res.json(topScores);
};

// POST score
const addScore = (req, res) => {
    const newScore = {
        id: Date.now(),
        username: req.body.username,
        score: req.body.score,
        createdAt: new Date()
    };

    scores.push(newScore);

    res.status(201).json({
        message: "Score added",
        data: newScore
    });
};

// PUT update score
const updateScore = (req, res) => {
    const scoreId = Number(req.params.id);

    const score = scores.find(score => score.id === scoreId);

    if (!score) {
        return res.status(404).json({
            error: "Score not found"
        });
    }

    score.username = req.body.username;
    score.score = req.body.score;

    res.json({
        message: "Score updated successfully",
        data: score
    });
};

// DELETE score
const deleteScore = (req, res) => {
    const scoreId = Number(req.params.id);

    const initialLength = scores.length;

    scores = scores.filter(score => score.id !== scoreId);

    if (scores.length === initialLength) {
        return res.status(404).json({
            error: "Score not found"
        });
    }

    res.json({
        message: "Score deleted successfully"
    });
};

module.exports = {
    getScores,
    addScore,
    updateScore,
    deleteScore
};