import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null); // socket m authUser._id k user dala h
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      // this data give you socket with socket id and other options also
      const data = io("https://chat-app-dbtt.onrender.com/", {
        query: {
          //yeh wali id ja rhi h onlinerUserSocketmap k andar backend m socket.js
          userId: authUser._id,
        },
      });
      console.log(data);
      setSocket(data);

      //backend se onlinerUserSocketmap obj se jo data aya usko usestate m save kr liya
      data.on("getOnlineUsers", (data) => setOnlineUsers(data));
      return () => data.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
