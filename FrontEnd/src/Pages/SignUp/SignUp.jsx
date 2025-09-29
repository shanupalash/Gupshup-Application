import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { UseSignup } from "../../Hooks/UseSignup.js";
import { Link } from "react-router-dom";

function SignUp() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const [error, setError] = useState("");

  const HandleCheckBox = (gender) => {
    setInput((prev) => ({ ...prev, gender }));
  };

  const { signupHook, loading } = UseSignup();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    if (
      !input.fullname ||
      !input.email ||
      !input.username ||
      !input.password ||
      !input.confirmpassword
    ) {
      return setError("All fields are required.");
    }

    if (!/\S+@\S+\.\S+/.test(input.email)) {
      return setError("Enter a valid email address.");
    }

    if (input.password !== input.confirmpassword) {
      return setError("Passwords do not match.");
    }

    await signupHook(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[380px]">
      <div className="w-80 lg:w-[550px] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">krlo</span>
        </h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form className="px-5" onSubmit={HandleSubmit}>
          {[
            "Full Name",
            "Email",
            "Username",
            "Password",
            "Confirm Password",
          ].map((field, index) => {
            const key = field.toLowerCase().replace(" ", "");
            const isPassword = key.includes("password");
            const isEmail = key === "email";

            return (
              <div key={index}>
                <label className="label p-2">
                  <span className="text-base label-text">{field}</span>
                </label>
                <input
                  type={isPassword ? "password" : isEmail ? "email" : "text"}
                  className="w-full input input-bordered h-10"
                  placeholder={field}
                  value={input[key]}
                  onChange={(e) =>
                    setInput((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                />
              </div>
            );
          })}

          <GenderCheckBox
            onCheckBoxChange={HandleCheckBox}
            selected={input.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
