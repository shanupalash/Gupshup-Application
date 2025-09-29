import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export const useGetConversation = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const gettingUsers = async () => {
      setloading(true);
      try {
        const res = await fetch("/api/Users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setAllUsers(data);
      } catch (error) {
        toast.error(error);
      } finally {
        setloading(false);
      }
    };

    gettingUsers();
  }, []);

  return { loading, allUsers };
};
