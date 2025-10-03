import authRoutes from "../routes/authRoutes.js";
import productRoutes from "../routes/products.js"

export default function loadRoutes(app) {
    app.use("/api/auth", authRoutes);
    app.use("/api/products", productRoutes);
    // app.use("/api/cart", cartRoutes);
    // app.use("/api/orders", orderRoutes);

}