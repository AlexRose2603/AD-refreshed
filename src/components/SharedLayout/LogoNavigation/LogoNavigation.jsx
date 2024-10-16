// import { NavLink } from "react-router-dom";
// import ModalCart from "../../ModalCart/ModalCart";
// import { useEffect, useRef, useState } from "react";
import AuthNav from "../../Auth/AuthNav/AuthNav";
import { useAuth } from "../../../redux/auth/useAuth";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../../assets/images/footer/logo.png";
import yellowLogo from "../../../assets/images/registration-AD.png";

// import { useSelector } from "react-redux";
// import { selectedProductsTotalCount } from "../../../redux/cart/selectors/selectors";
import {
  BurgerIcon,
  BurgerIconWrapper,
  ClientTariff,
  // CartBtn,
  // CartCount,
  Container,
  // HeartBtn,
  Item,
  LogoLink,
  MainNavLink,
  NavList,
  ScrollLink,
  // ShoppingBtnBox,
} from "./LogoNavigation.styled";
import LogOut from "../../Auth/LogOut/LogOut";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Burger from "../Burger/Burger";
import PropTypes from "prop-types";

const LogoNavigation = ({ accountType }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const logoHeader = isMainPage ? logo : yellowLogo;
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  // const modalRef = useRef(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  //нічого тут не змінювати!
  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     console.log("clicked outside");
  //     if (modalRef.current && !modalRef.current.contains(e.target)) {
  //       setIsModalOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  // const totalProductsCount = useSelector(selectedProductsTotalCount);

  // const handleCartIconClick = () => {
  //   setIsModalOpen(!isModalOpen);
  //   console.log("closed", isModalOpen);
  // };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const toggleMenu = () => {
    setIsBurgerOpen((prevIsBurgerOpen) => !prevIsBurgerOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };

  return (
    <>
      <Container isMainPage={isMainPage}>
        <LogoLink to="/">
          <img src={logoHeader} alt="logo" />
        </LogoLink>

        {windowWidth <= 1279 ? (
          isLoggedIn && accountType ? (
            <>
              <ClientTariff style={{ color: "white" }}>
                Ваша підписка: {accountType}
              </ClientTariff>
              <BurgerIconWrapper onClick={toggleMenu}>
                <BurgerIcon isMainPage={isMainPage} />
              </BurgerIconWrapper>
            </>
          ) : (
            <BurgerIconWrapper onClick={toggleMenu}>
              <BurgerIcon isMainPage={isMainPage} />
            </BurgerIconWrapper>
          )
        ) : (
          <>
            <NavList>
              <Item>
                <MainNavLink to="/" isMainPage={isMainPage}>
                  Головна
                </MainNavLink>
              </Item>
              <Item>
                <MainNavLink to="/services" isMainPage={isMainPage}>
                  Наші послуги
                </MainNavLink>
              </Item>

              {/* <Item>
            <MainNavLink to="">Блог</MainNavLink>
          </Item> */}
              {/* <Item>
            <MainNavLink to="/shop">Магазин</MainNavLink>
          </Item> */}
              <Item isMainPage={isMainPage}>
                <ScrollLink onClick={scrollToBottom} smooth={true} spy={true}>
                  Контакти
                </ScrollLink>
              </Item>
            </NavList>
            {isLoggedIn && accountType && (
              <ClientTariff isMainPage={isMainPage}>
                Ваша підписка: {accountType}
              </ClientTariff>
            )}
          </>
        )}
        {!isLoggedIn ? <AuthNav /> : <LogOut />}
        {/* {isLoggedIn ? (
          <ShoppingBtnBox>
            <NavLink to="/favourite">
              {" "}
              <HeartBtn />
            </NavLink>
            <button type="button" ref={modalRef} onClick={handleCartIconClick}>
              <CartBtn />
              {isModalOpen && (
                <ModalCart
                  setIsModalOpen={setIsModalOpen}
                  isOpen={isModalOpen}
                />
              )}
              <CartCount>{totalProductsCount}</CartCount>
            </button>
          </ShoppingBtnBox>
        ) : (
          <AuthNav />
        )} */}
      </Container>
      {windowWidth <= 1279 && isBurgerOpen && (
        <Burger
          isBurgerOpen={isBurgerOpen}
          toggleMenu={toggleMenu}
          closeBurgerMenu={closeBurgerMenu}
        />
      )}
    </>
  );
};

export default LogoNavigation;

LogoNavigation.propTypes = {
  accountType: PropTypes.string.isRequired,
};
