import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirmpassword: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ["male", "female"],
    },
    profilepic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
