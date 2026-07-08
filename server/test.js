require("dotenv").config();
const mongoose = require("mongoose");

async function testConnection() {
  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Full Error:");
    console.error(err);
    process.exit(1);
  }
}

testConnection();