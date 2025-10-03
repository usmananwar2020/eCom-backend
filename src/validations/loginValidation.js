import Joi from "joi";
import { Failuer } from '../utils/responseHandler/failuer.js'

export function loginUserValidation(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().min(5).max(50).required(),
        password: Joi.string().min(5).max(1024).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return Failuer(res, true, 400, error.details[0].message, []);
    }
    next();
}