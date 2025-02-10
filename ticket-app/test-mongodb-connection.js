// filepath: /path/to/test-mongodb-connection.js
const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://robinheck101:r4umrPwbcfy4qFrR@cluster0.fteh7.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://robinheck101:r4umrPwbcfy4qFrR@cluster0.fteh7.mongodb.net/TicketApp/";

async function testConnection() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas:", err);
  } finally {
    await client.close();
  }
}

testConnection();