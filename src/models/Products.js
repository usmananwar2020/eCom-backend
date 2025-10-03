import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    stock: String,
}, {
    timestamps: true
})

export default mongoose.model("Products", userSchema);