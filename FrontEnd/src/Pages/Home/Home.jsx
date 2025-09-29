import MessageContainer from "../../Components/Messages/MessageContainer";
import SideBar from "../../Components/SideBar/SideBar";

function Home() {
  return (
    <div className=" flex sm:h-[460px] md:h-[560px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default Home;
