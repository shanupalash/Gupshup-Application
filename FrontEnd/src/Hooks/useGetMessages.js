import toast from "react-hot-toast";
import { useZustandStore } from "../Zustand/useZustand";
import { useEffect, useState } from "react";

const useGetMessages = () => {
  const { selectedConversation, setMessages, messages } = useZustandStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/message/recivemessage/${selectedConversation._id}`
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation._id) getMessages();
  }, [selectedConversation]);

  return { loading, messages };
};

export default useGetMessages;
