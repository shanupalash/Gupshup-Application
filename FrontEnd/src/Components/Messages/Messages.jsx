import { useEffect, useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";
import useListenMessages from "../../Hooks/useListenMessages";

function Messages() {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 40);
  }, [messages]);

  return (
    <div className="px-4 flex-1 xs:max-h-[650px] xs:min-h-[550px] lg:min-h-[400px]  pr-1 overflow-auto ">
      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">send a message to start conversation</p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages?.map((data) => (
          <div key={data._id} ref={lastMsgRef}>
            <Message data={data} />
          </div>
        ))}
      {}
    </div>
  );
}

export default Messages;
