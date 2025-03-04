import mongoose, { Schema } from "mongoose";

const ticketConnection = mongoose.createConnection(`${process.env.MONGODB_URI}/TicketApp`);

ticketConnection.on('connected', () => {
  console.log("MongoDB connected to TicketApp");
});

ticketConnection.on('error', (err) => {
  console.error("MongoDB connection error:", err);
});

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

const Ticket = ticketConnection.models.Ticket || ticketConnection.model("Ticket", ticketSchema);
console.log("Ticket model created", Ticket);
export default Ticket;