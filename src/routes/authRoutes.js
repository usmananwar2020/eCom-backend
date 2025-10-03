import express from "express";
import { registerUserValidation } from "../validations/userValidation.js";
import registerUser from "../controller/user/register.js";
import { login } from "../controller/user/login.js";
import { loginUserValidation } from "../validations/loginValidation.js";
const router = express.Router();

router.post("/register", registerUserValidation, registerUser);
router.post("/login", loginUserValidation, login);

export default router;