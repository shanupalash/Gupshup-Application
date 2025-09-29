import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../Hooks/useLogout";

function LogOut() {
  const { logout } = useLogout();

  return (
    <div className="mt-auto my-1">
      <BiLogOut
        onClick={logout}
        className="w-6 h-6 text-white cursor-pointer text-sm"
      />
      Logout
    </div>
  );
}

export default LogOut;
