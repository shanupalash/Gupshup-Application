import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    message: { type: String, require: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", MessageSchema);
