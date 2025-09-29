import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useGetConversation } from "../../Hooks/useGetConversation";
import { useZustandStore } from "../../Zustand/useZustand";
import toast from "react-hot-toast";
function SearchInput() {
  const [input, setInput] = useState("");
  const { allUsers } = useGetConversation();
  const { setSelectedConversation } = useZustandStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) toast.error("search is empty");
    if (input.length < 3) {
      toast.error("search length must be greater then 2");
    }
    const searchUsers = allUsers.find((c) =>
      c.fullname.toLowerCase().includes(input.toLowerCase())
    );
    if (searchUsers) {
      setSelectedConversation(searchUsers);
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
