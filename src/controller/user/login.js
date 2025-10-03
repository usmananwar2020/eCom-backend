import { checkEmail } from "../../services/user/index.js"
import { GenerateAuthToken } from "../../utils/JWToken/index.js";
import { Failuer } from "../../utils/responseHandler/failuer.js";
import { Success } from "../../utils/responseHandler/success.js";
import bcrypt from "bcrypt";
import _ from "lodash";

export const login = async (req, res) => {
    try {
        const user = await checkEmail(req.body.email);
        if (!user) {
            return Failuer(res, true, 401, "Email not exist", [])
        }
        const comparePassword = await bcrypt.compare(req.body.password, user.password);

        if (!comparePassword) {
            return Failuer(res, true, 400, 'Invalid Email or Password', [])
        }

        const token = await GenerateAuthToken(user);
        const result = _.pick(user, ["_id", "name", "email", "role"])
        result.token = token;
        return Success(res, false, 200, "Successfully Login", result)

    } catch (error) {
        return Failuer(res, true, 400, error.message, [])
    }
}