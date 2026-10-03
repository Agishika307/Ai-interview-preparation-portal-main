const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error("❌ MONGO_URI is not defined in .env file");
      return;
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    if (error.message.includes("Could not connect to any servers")) {
      console.warn(
        "⚠️  Notice: MongoDB Atlas might have blocked access from your current IP address.\n" +
        "   To fix this: Go to MongoDB Atlas -> Network Access -> Add IP Address -> Choose 'Allow Access From Anywhere' (0.0.0.0/0)."
      );
    }
  }
};

module.exports = connectDB;
