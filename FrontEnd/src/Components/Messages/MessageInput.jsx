import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { useSendMessage } from "../../Hooks/useSendMessage";
function MessageInput() {
  const [input, setInput] = useState("");
  const { loading, sendMsg } = useSendMessage();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") return;
    await sendMsg(input);
    setInput("");
  };
  return (
    <form onSubmit={HandleSubmit} className="px-4 my-3 ">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm block rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          type="submit"
          className=" absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
