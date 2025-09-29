import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

export const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signupHook = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    setLoading(true);
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("LoggedInUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signupHook, loading };
};
function handleInputErrors({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password != confirmpassword) {
    toast.error("password do not match");
    return false;
  }
  if (password.length < 4) {
    toast.error("password length should be greater then 4");
    return false;
  }
  return true;
}
