const admin = require("../utils/firebase/index.js")

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = await admin.auth().verifyIdToken(token);

        const user = {
            userId: decoded.uid,
            email: decoded.email
        };

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
}

module.exports = authMiddleware;