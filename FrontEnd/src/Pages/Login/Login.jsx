import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../Hooks/useLogin";
import toast from "react-hot-toast";
function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { startLogin } = useLogin();
  const handleLogin = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      startLogin(input);
    } else toast.error("fileds cannot be blank ");
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[390px] xs:px-7  lg:px-0 xs:ml-0 ">
      <div className="xs:w-72 lg:w-96 p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          login <span className="text-blue-500">krle bhai</span>
        </h1>
        <form>
          <div>
            <label className="label p-2" htmlFor="#">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full  input input-bordered h-10 "
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>
          <div className="">
            <label htmlFor="#" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button onClick={handleLogin} className="btn btn-block btn-sm mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
