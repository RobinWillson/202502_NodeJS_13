import mongoose, { Schema } from "mongoose";

const postConnection = mongoose.createConnection(`${process.env.MONGODB_URI}/PostNet`);

postConnection.on('connected', () => {
  console.log("MongoDB connected to PostNet");
});

postConnection.on('error', (err) => {
  console.error("MongoDB connection error:", err);
});

// const url = process.env.MONGODB_URI;
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));


mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: "Title is required"
    },
    description: {
      type: String,
      required: "Description is required"
    },
  },
  {
    timestamps: true
  }
);

const SvrPost = postConnection.models.SvrPost || postConnection.model("SvrPost", postSchema);
export default SvrPost;

/**
在 MongoDB 中，集合名稱通常採用小寫和複數形式。當你在 Mongoose 中定義一個模型時，它會自動將模型名稱轉換為小寫並將其複數化以形成集合名稱。因此，如果您的集合名稱是 svrPosts，您應該以 Mongoose 能夠正確對應的方式定義您的模型名稱。

鑑於您的集合名稱 svrPosts，您可以將模型名稱定義為 SvrPost 或 svrPost，以確保它正確對應到集合名稱 svrposts。
 */