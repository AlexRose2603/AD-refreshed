import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import { useLocation } from "react-router-dom";
import { LogoutBtn } from "./LogOut.styled";

const LogOut = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <>
      {/* <p>Welcome, {user.name}</p> */}
      <LogoutBtn
        type="button"
        onClick={() => dispatch(logOut())}
        isMainPage={isMainPage}
      >
        Вийти
      </LogoutBtn>
    </>
  );
};
export default LogOut;
