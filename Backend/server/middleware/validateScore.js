const validateScore = (req, res, next) => {
    const { username, score } = req.body;

    // Username validation
    if (!username || username.trim() === "") {
        return res.status(400).json({
            error: "Username is required"
        });
    }

    // Username length validation
    if (username.length > 20) {
        return res.status(400).json({
            error: "Username must be under 20 characters"
        });
    }

    // Score validation
    if (typeof score !== "number" || score < 0) {
        return res.status(400).json({
            error: "Score must be a positive number"
        });
    }

    next();
};

module.exports = validateScore;