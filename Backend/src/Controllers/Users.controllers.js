import { User } from "../Models/User.model.js";

export const GetAllUsers = async (req, res) => {
  try {
    const myId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: myId } }).select(
      "-password"
    );
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in user controller Getallusers", error);
    res.status(500).json({ error: "internal server error" });
  }
};
