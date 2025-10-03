import JWT from "jsonwebtoken";

export const GenerateAuthToken = function (user) {
    return JWT.sign(
        { _id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};
