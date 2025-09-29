import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Error() {
  toast.error("Error while fetching user");

  return (
    <div className="flex flex-col items-center justify-center m-32 p-10 text-xl font-bold gap-5">
      <h1>Error</h1>
      <p>Error while fetching user</p>
      <p>Either user is not exit or wrong credentials</p>
      <div className="flex gap-8 ">
        <Link to={`/login`}>
          <button className=" text-sky-500 hover:shadow-lg hover:shadow-slate-700">
            Login Again
          </button>
        </Link>
        <Link to={`/signup`}>
          <button className="text-teal-500 hover:shadow-lg hover:shadow-slate-700 ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
