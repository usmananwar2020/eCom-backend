import jwt from "jsonwebtoken";
import { UserRole } from "../utils/enum.js";

export default function roleAdmin(req, res, next) {
    const authHeader = req.header("Authorization");

    // Token must be in the format: "Bearer <token>"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded?.role !== UserRole.admin) {
            return res.status(403).json({ message: `Access denied! Admin can ${req.method === 'PUT' ? 'Update' : 'Add'} the products` });
        }
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
