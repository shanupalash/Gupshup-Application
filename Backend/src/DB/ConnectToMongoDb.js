import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ChatApp`);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};
export default connectToMongoDB;
