import { useAuth } from "redux/auth/useAuth";
import LogOut from "../src/components/Auth/LogOut/LogOut";
import AuthNav from "../src/components/Auth/AuthNav/AuthNav";

const UserMenu = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div>{isLoggedIn ? <AuthNav /> : <LogOut />}</div>
    </>
  );
};

export default UserMenu;
