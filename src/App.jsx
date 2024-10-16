import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

import Layout from "./components/SharedLayout/Layout/Layout";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import TariffStandart from "./components/Subscription/Standart/TariffStandart";

import ShopPage from "./pages/ShopPage/ShopPage";
import CardInfo from "./components/Shop/CardInfo";
import Favourite from "./pages/Favourite/Favourite";
import CartPage from "./pages/CartPage/CartPage";
import RegisterForm from "./components/Auth/RegisterForm/RegisterForm";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
// import TariffsPage from "./pages/TariffsPage/TariffsPage";

// import PremiumSubscription from "./components/Subscription/Premium/Premium";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "./redux/auth/slice";
import { useEffect } from "react";
import { fetchGetClient } from "./redux/getClient/operation";

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth?.token?.accessToken);
  const accountTypeId = useSelector(
    (state) => state.clientTariffId.accountTypeId
  );
  const accountType = useSelector((state) => state.clientTariffId.accountType);
  const tariffs = useSelector((state) => state.subscription.data);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchGetClient(accessToken));
    } else {
      console.log("user is not logged in");
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (accountTypeId === 0) {
      console.log("У вас немає підписки");
    } else {
      const matchedTariff = tariffs.find(
        (tariff) => tariff.id === accountTypeId
      );

      if (matchedTariff) {
        console.log(`Ваша підписка: ${matchedTariff.title}`);
      } else {
        console.log("Такої підписки не знайдено, не співпадає id");
      }
    }
  }, [accountTypeId, tariffs]);

  useEffect(() => {
    if (accessToken && !accountType) {
      console.log("User is not logged in or doesn't have a subscription yet.");
    } else {
      console.log(`Your subscription: ${accountType}`);
    }
  }, [accessToken, accountType]);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      dispatch(saveToken({ accessToken: storedToken }));
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route element={<Layout accountType={accountType} />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* <Route path="/tariffs/*" element={<TariffsPage />}> */}
          <Route path="/tariff-standart" element={<TariffStandart />} />

          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<CardInfo />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/shopping-cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/registration" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
