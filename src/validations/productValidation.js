import Joi from "joi";
import { Failuer } from '../utils/responseHandler/failuer.js'

export function productValidation(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(5).max(200).required(),
        price: Joi.string().required(),
        stock: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return Failuer(res, true, 400, error.details[0].message, []);
    }
    next();
}