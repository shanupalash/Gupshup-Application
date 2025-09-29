import { useGetConversation } from "../../Hooks/useGetConversation";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, allUsers } = useGetConversation();


  return (
    <div className="flex flex-col py-2 overflow-auto">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {allUsers.map((user, i) => (
        <Conversation
          key={user._id}
          data={user}
          lastIdx={i === allUsers.length - 1}
        />
      ))}
    </div>
  );
}

export default Conversations;
