import * as dotenv from "dotenv";

export default function loadConfig() {
    dotenv.config();

    if (!process.env.PORT || !process.env.MONGO_URI || !process.env.JWT_SECRET) {
        throw new Error("❌ Missing essential environment variables");
    }

    console.log("✅ Config loaded");
}
