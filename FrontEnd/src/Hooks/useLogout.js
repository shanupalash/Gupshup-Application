import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

export const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    try {
    
      const res = await fetch("api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      
      localStorage.removeItem("LoggedInUser");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return {logout};
};
