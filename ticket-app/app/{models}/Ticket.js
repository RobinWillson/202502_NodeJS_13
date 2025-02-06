import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: "Title is required"
    },
    description: {
      type: String,
      required: "Description is required"
    },
    category: {
      type: String,
      required: "Category is required"
    },
    priority: {
      type: String,
      required: "Priority is required"
    },
    progress: {
      type: Number,
      required: "Progress is required"
    },
    status: {
      type: String,
      required: "Status is required"
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;