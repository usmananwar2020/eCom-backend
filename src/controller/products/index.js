import Products from "../../models/Products.js"
import { getProductId, getProductsList, productsCount, updateProductById } from "../../services/product/index.js";
import { Failuer } from "../../utils/responseHandler/failuer.js"
import { Success } from "../../utils/responseHandler/success.js";

export const addProduct = async (req, res) => {
    try {
        const product = await new Products(req.body);
        product.save();
        Success(res, false, 201, "Product added Successfully", product)

    }
    catch (error) {
        Failuer(res, true, 400, error[0].message, [])
    }
}
export const getProduct = async (req, res) => {
    try {
        const productList = await getProductsList(req);
        const productCount = await productsCount();
        const products = {
            data: productList,
            count: productCount
        }
        Success(res, false, 200, "Products fetched Successfully", products)
    }
    catch (error) {
        Failuer(res, true, 400, error[0].message, [])
    }
}
export const getProductById = async (req, res) => {
    try {
        const product = await getProductId(req);
        Success(res, false, 200, "Product fetched Successfully", product)
    }
    catch (error) {
        Failuer(res, true, 400, error[0].message, [])
    }
}
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await updateProductById(req);
        updatedProduct.save();
        Success(res, false, 201, "Product update Successfully", req.body)
    }
    catch (error) {
        Failuer(res, true, 400, error.message, [])
    }
}