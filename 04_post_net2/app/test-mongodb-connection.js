// filepath: /path/to/test-mongodb-connection.js
const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://robinheck101:r4umrPwbcfy4qFrR@cluster0.fteh7.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://robinheck101:r4umrPwbcfy4qFrR@cluster0.fteh7.mongodb.net/TicketApp/";

const uri = "mongodb+srv://robinheck101:r4umrPwbcfy4qFrR@cluster0.fteh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  // const client = new MongoClient(uri, { useUnifiedTopology: true });
  const client = new MongoClient(uri);



  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");
    return true;
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas:", err);
    return false;
  } finally {
    await client.close();
  }
}

export default testConnection;