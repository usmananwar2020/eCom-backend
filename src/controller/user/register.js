import User from "../../models/User.js";
import { checkEmail } from "../../services/user/index.js";
import { GenerateAuthToken } from "../../utils/JWToken/index.js";
import { Success } from "../../utils/responseHandler/success.js";
import { Failuer } from "../../utils/responseHandler/failuer.js";
import _ from "lodash";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    try {
        const isExist = await checkEmail(req.body.email)
        if (isExist) {
            return Failuer(res, true, 400, "Email already exist", [])
        }
        let user = new User(req.body);

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(user.password, salt);
        user.password = hashpassword;
        await user.save();

        const token = await GenerateAuthToken(user);
        const result = _.pick(user, ["_id", "name", "email", "role"])
        result.token = token;
        return Success(res, false, 200, "User registered successfully", result)
    }
    catch (error) {
        return Failuer(res, true, 400, error.message, [])
    }
}
export default registerUser;