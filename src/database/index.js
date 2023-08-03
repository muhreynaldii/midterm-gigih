const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

async function connectToDatabase() {
  try {
    const connectionString = `mongodb+srv://reynaldi180101:6aEurcj7AgV2MqoC@cluster0.vpivgkd.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to database");
  } catch (err) {
    console.log(`failed connect ${err.message}`);
    process.exit();
  }
}

module.exports = connectToDatabase;
