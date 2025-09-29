import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const onlinerUserSocketmap = {}; //userid :socketid

export const getReciverSocketId = (reciverId) => {
  //sirf online users ko he socket io k through he msg kyu bhej rhe h??
  // kyuki jo offline h jb vo login kregy yah online ayegy
  // to vo apne aap onlinerUserSocketmap m add ho jayegy
  // fir unko bhi socket k through msg jayega
  // warna jb login kregy to database se msg to load ho he rhe h
  return onlinerUserSocketmap[reciverId];
};

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  //yeh h user id jo k authuserContext aur localstorage se aai h each id is different (queary m se aa rhi)
  const userId = socket.handshake.query.userId;

  if (userId != "undefined") onlinerUserSocketmap[userId] = socket.id; //add krdi

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(onlinerUserSocketmap)); //keys client ko bhej di

  // socket.on is used to listen to the events can we used on both client and server

  socket.on("disconnect", () => {
    console.log("user disconnected :", socket.id);
    delete onlinerUserSocketmap[userId];
    io.emit("getOnlineUsers", Object.keys(onlinerUserSocketmap));
  });
});
export { app, io, server };
