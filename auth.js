const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        // hämta header
        const authHeader = req.headers.authorization;

        // kontrollera om token finns
        if (!authHeader) {
            return res.status(401).json({
                message: "Giltig header saknas"
            });
        }

        // Bearer TOKEN
        const token = authHeader.split(" ")[1];

        // verifiera token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // spara user-data i request
        req.user = decoded;

        // fortsätt till route
        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid token"
        });

    }

};

module.exports = authMiddleware;