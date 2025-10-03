import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
    const authHeader = req.header("Authorization");

    // Token must be in the format: "Bearer <token>"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { _id, role } from payload
        next();
    } catch (err) {
        res.status(400).send({
            message: 'Invalid token',
            data: [],
            error: true
        })
    }
}
