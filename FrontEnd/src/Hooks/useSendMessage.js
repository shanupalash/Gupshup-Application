import toast from "react-hot-toast";
import { useZustandStore } from "../Zustand/useZustand";
import { useState } from "react";
export const useSendMessage = () => {
  const { selectedConversation, setMessages, messages } = useZustandStore();
  const [loading, setLoading] = useState(false);
  const sendMsg = async (input) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/message/sendmessage/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMsg };
};
