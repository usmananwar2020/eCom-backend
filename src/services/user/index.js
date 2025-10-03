import User from "../../models/User.js"

 export const checkEmail = async(email) => {
    return await User.findOne({email: email})
 }