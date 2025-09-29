import { useState } from "react";
import Conversations from "./Conversations";
import LogOut from "./LogOut";
import SearchInput from "./SearchInput";

function SideBar() {
  const [hide, setHide] = useState(false);
  return (
    <div className=" border-r xs:max-h-[900px] border-slate-500   xs:p-1 lg:p-4 flex flex-col items-center   ">
      <div
        className={` flex mt-2 p-5 w-8 h-8 items-center justify-center  text-bold text-black text-xl  bg-purple-300 rounded-full ${
          !hide ? "hidden" : ""
        } `}
      >
        <button
          className="text-center"
          onClick={(e) => {
            e.preventDefault();
            setHide(false);
          }}
        >{`<`}</button>
      </div>
      <div
        className={`text-xl -mb-1  text-violet-300 ${hide ? "hidden" : ""} `}
      >
        kisse baat krni h ?
      </div>
      <div className="divider px-3 xs:px-0 "></div>
      <div className=" overflow-auto">
        <div className={` ${hide ? "hidden" : ""}`}>
          <SearchInput />
        </div>
        <div
          className={` ${hide ? "hidden" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setHide(true);
          }}
        >
          <Conversations />
        </div>
      </div>
      <LogOut />
    </div>
  );
}

export default SideBar;
