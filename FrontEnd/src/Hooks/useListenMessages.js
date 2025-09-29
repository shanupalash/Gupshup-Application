import { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext";
import { useZustandStore } from "../Zustand/useZustand";
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useZustandStore();
  useEffect(() => {
    socket?.on("newmessage", (newmessage) => {
      setMessages([...messages, newmessage]);
    });

    return () => socket?.off("newmessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
