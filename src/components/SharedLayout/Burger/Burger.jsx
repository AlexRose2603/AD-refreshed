import PropTypes from "prop-types";
import burgerLogo from "../../../assets/images/footer/logo.png";
import Contacts from "../Footer/Contacts/Contacts";
import { useAuth } from "../../../redux/auth/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import {
  BtnBox,
  BurgerHeader,
  BurgerLogoLink,
  BurgerNavLink,
  CloseBtn,
  CloseIcon,
  ContactsWrapper,
  Container,
  LogOutBtn,
  LoginLink,
  NavItem,
  NavList,
  RegLink,
} from "./Burger.styled";

const Burger = ({ toggleMenu, closeBurgerMenu }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  return (
    <Container>
      <BurgerHeader>
        <BurgerLogoLink to="/">
          <img src={burgerLogo} alt="logo" />
        </BurgerLogoLink>
        <CloseBtn onClick={toggleMenu}>
          <CloseIcon />
        </CloseBtn>
      </BurgerHeader>

      <nav>
        <NavList>
          <NavItem>
            <BurgerNavLink to="/" onClick={closeBurgerMenu}>
              Головна
            </BurgerNavLink>
          </NavItem>
          {/* <NavItem>
            <BurgerNavLink to="/tariffs" onClick={closeBurgerMenu}>
              Тарифи
            </BurgerNavLink>
          </NavItem> */}
          <NavItem>
            <BurgerNavLink to="/services" onClick={closeBurgerMenu}>
              Наші послуги
            </BurgerNavLink>
          </NavItem>
        </NavList>
      </nav>
      {!isLoggedIn ? (
        <BtnBox>
          <RegLink to="/registration" onClick={closeBurgerMenu}>
            Реєстрація
          </RegLink>
          <LoginLink to="/login" onClick={closeBurgerMenu}>
            Авторизація
          </LoginLink>
        </BtnBox>
      ) : (
        <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
          Вийти
        </LogOutBtn>
      )}

      <ContactsWrapper>
        <Contacts />
      </ContactsWrapper>
    </Container>
  );
};
export default Burger;

Burger.propTypes = {
  closeBurgerMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
