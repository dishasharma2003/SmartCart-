// ./config/db.js
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB connected");
  } catch (error) {
    console.error("❌ DB error:", error.message);
    process.exit(1);
  }
};

export default connectDb;
