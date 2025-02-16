

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodeToken;
        next();

    } catch (error) {
        next(error);
    }
};

module.exports = authMiddleware;
