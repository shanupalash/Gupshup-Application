import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext";
import ErrorPage from "./Pages/Error/Error";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className=" xs:px-1 sm:p-2 md:p-4 h-screen flex flex-col  justify-center ">
      <div className="mt-1 self-center   ">
        <h1 className=" w-64 text-2xl font-bold text-violet-500 ml-2   border-t-purple-400 text-transparent bg-gradient-to-r from-blue-500 via-red-400 to-purple-400 bg-clip-text text-nowrap ">
          Aao Chat kre
        </h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
