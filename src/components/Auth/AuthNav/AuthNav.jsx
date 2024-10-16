import { useLocation } from "react-router-dom";
import { AuthLink, AuthLinks, Line } from "./AuthNav.styled";

const AuthNav = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <>
      <AuthLinks>
        <AuthLink to="/registration" isMainPage={isMainPage}>
          Реєстрація
        </AuthLink>
        <Line></Line>
        <AuthLink to="/login" isMainPage={isMainPage}>
          Авторизація
        </AuthLink>
      </AuthLinks>
    </>
  );
};

export default AuthNav;
