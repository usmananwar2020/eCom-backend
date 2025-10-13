import Products from "../../models/Products.js";

export const getProductsList = async (req) => {
    const searchParams = req.query;
    const query = {}
    if (searchParams.search) {
        query.$or = [
            { name: { $regex: searchParams.search || "", $options: "i" } }, // i for case insensitive
            { description: { $regex: searchParams.search || "", $options: "i" } },
        ]
    }

    const products = await Products.find(query)
        .limit(parseInt(searchParams.limit) || 10)
        .skip(parseInt(searchParams.offset) || 0);

    return products;

}
export const productsCount = async () => {
    const count = Products.countDocuments();
    return count;
}
export const getProductId = async (req) => {
    const product = Products.findOne({_id: req.params.id});
    return product;
}