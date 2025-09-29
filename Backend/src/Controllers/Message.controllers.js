import { Conversation } from "../Models/Conversation.model.js";
import { Message } from "../Models/Message.model.js";
import { getReciverSocketId, io } from "../Socket/Socket.js";
export const sendmessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, reciverId],
      });
    }
    const newmessage = new Message({
      senderId,
      reciverId,
      message,
    });

    if (newmessage) {
      conversation.messageDetails.push(newmessage._id);
    }
    //   await Conversation.save();
    //   await Message.save();
    await Promise.all([conversation.save(), newmessage.save()]);

    const reciverSocketId = getReciverSocketId(reciverId);

    if (reciverSocketId) {
      // io.to(<socket-id>).emit() used to send message to specific client
      io.to(reciverSocketId).emit("newmessage", newmessage);
    }

    res.status(200).json(newmessage);
  } catch (error) {
    console.log("error in message controller sendmessage");
    res.json({ error: "internal server error" });
  }
};
export const getmessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    let msg = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messageDetails");
    if (!msg) {
      return res.status(200).json([]);
    }

    res.status(200).json(msg.messageDetails);
  } catch (error) {
    console.log("error in message controller getmessage");
    res.status(500).json({ error: "internal server error" });
  }
};
