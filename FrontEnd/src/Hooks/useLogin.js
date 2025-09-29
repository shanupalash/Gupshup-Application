import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();
  const startLogin = async ({ username, password }) => {
    try {
      if (!username && !password) {
        throw new Error(data.error);
      }
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("object", data);

      if (!data || data.error) {
        res.status(400).json({ error: data.error });
        throw new Error(data.error);
      }

      localStorage.setItem("LoggedInUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error, " useLogin hook ka error");
      navigate("/error");
    }
  };

  return { startLogin };
};
