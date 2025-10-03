import Products from "../../models/Products.js"
import { Failuer } from "../../utils/responseHandler/failuer.js"
import { Success } from "../../utils/responseHandler/success.js";

export const addProduct = async(req, res) => {
    try{
        const product = await new Products(req.body);
        product.save();
        Success(res, false, 201, "Product added Successfully", product)

    }
    catch(error){
        Failuer(res, true, 400, error[0].message, [])
    }
}